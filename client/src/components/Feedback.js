import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import config from '../config';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Intent } from '@blueprintjs/core';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function Feedback() {
  const history = useHistory();
  const submission = useSelector((state) => state.feedback.submission);
  const { t } = useTranslation();

  const initRecordings = () => {
    if (submission && submission.feedback) {
      const files = JSON.parse(submission.feedback);
      return files.map(file => ({
        audioURL: config.uploadDir + '/' + file
      }));
    } else {
      return [];
    }
  }

  const [recordings, setRecordings] = useState(initRecordings());
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setRecording] = useState(false);
  const [isBlocked, setBlocked] = useState(false);

  const addNewRecording = function (blob) {
    const audioURL = window.URL.createObjectURL(blob);
    setRecordings(
      recordings.concat({
        audioURL,
        file: new File([blob], 'recording.webm'),
      })
    );
  };
  
  const handleSubmitFeedback = () => {
    const promises = [];
    let fileNames = [];

    // First send all the audio files to api, waiting for all response
    recordings.forEach(recording => {
      var formData = new FormData();
      formData.append("file", recording.file);
      promises.push(
        axios.post("/files", formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      );
    });

    // Now submit the list of audio filename
    axios.all(promises)
      .then((results) => {
        fileNames = results.map(result => result.data);
        axios.post(`/studies/${submission.id}/feedback`, { files: fileNames })
          .then(res => { history.push("/submissions"); });
      })
  }

  useEffect(() => {

    if (navigator.mediaDevices.getUserMedia && submission) {
      const constraints = { audio: true };
      let chunks = [];
      const onSuccess = (stream) => {
        const newMediaRecorder = new MediaRecorder(stream);

        newMediaRecorder.onstop = (e) => {
          const audioName = 'recording';
          const blob = new Blob(chunks);
          chunks = [];
          addNewRecording(blob);
        };

        newMediaRecorder.ondataavailable = function (e) {
          chunks.push(e.data);
        };

        setMediaRecorder(newMediaRecorder);
      };

      let onError = function (err) {
        console.log('The following error occured: ' + err);
      };

      navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    }
  }, [recordings]);

  if (!submission) {
    history.push('/submissions');
    return null;
  }

  const imgs = JSON.parse(submission.uploads).map((file) => (
    <img
      key={file}
      className="img-review"
      src={config.uploadDir + '/' + file}
    />
  ));

  const toggleRecording = () => {
    if (isRecording) {
      mediaRecorder.stop();
    } else {
      mediaRecorder.start();
    }
    setRecording(!isRecording);
  };

  const recordingsMarkup = recordings.map((thisRecording) => (
    <div key={thisRecording.audioURL} className="audio-player-wrapper">
      <audio src={thisRecording.audioURL} controls />
      <Button
        icon="cross"
        outlined={true}
        intent={Intent.DANGER}
        onClick={() =>
          setRecordings(
            recordings.filter((recording) => recording !== thisRecording)
          )
        }
      />
    </div>
  ));

  return (
    <div className="main-panel">
      <Sidebar>
        <div className="text-center">
          <h2>
            <u>{submission.lesson.subject.name}</u>
          </h2>
          <h2 style={{ textTransform: 'uppercase' }}>
            {submission.lesson.title}
          </h2>
        </div>

        <div>
          <h3>
            Họ và tên: {submission.student.last_name}{' '}
            {submission.student.first_name}
          </h3>
        </div>

        <div className="text-center">
          <button
            className={
              'record-button ' + (isRecording ? 'recording' : 'not-recording')
            }
            onClick={toggleRecording}
          ></button>
        </div>

        {recordingsMarkup}

        <Button intent={Intent.PRIMARY} onClick={handleSubmitFeedback}>
          {t("Done")}
        </Button>
      </Sidebar>

      <div className="main-content">{imgs}</div>
    </div>
  );
}
