import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Intent, ProgressBar } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';
import { submit, deleteSubmission } from '../../redux/actions/lesson';
import md5 from 'js-md5';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import config from '../../config';
import { useTranslation } from 'react-i18next';

export default function Submission(props) {
  const uploadApi = `${config.apiEndpoint}/files`;
  const dispatch = useDispatch();
  const student = useSelector((state) => state.user.student);
  const lesson = useSelector(state => state.lesson);
  const { submission, feedback, feedbackText } = lesson;
  const { t } = useTranslation();

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    // generate random file name, api will accept this name
    const fileName = md5(String(Date.now())) + '.' + meta.name.split('.').pop();
    return {
      url: uploadApi,
      headers: { accept: 'application/json' },
      fields: {
        'file-name': fileName,
      },
      meta: { fileName },
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {};

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {

    dispatch(
      submit({
        lessonId: lesson.id,
        studentId: student.id,
        files: files.map((file) => file.meta.fileName),
      })
    );

    allFiles.forEach((f) => f.remove());
  };

  const handleDeleteSubmission = () => {
    const studyId = lesson.studies[0].id;
    dispatch(deleteSubmission(studyId));
  }

  const submissionMarkup = submission && submission.length > 0 ? (

    submission.map((file) => (
      <img className="img-review" src={config.uploadDir + '/' + file} />
    ))
  ) :
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*"
      inputContent={t("Click here to choose images")}
      submitButtonContent={t("Submit")}
      inputWithFilesContent={t("Add Files")}
    />;

  const hasFeedback = (feedback && feedback.length > 0) ||
                      (feedbackText && feedbackText.length > 0);

  return (
    <div>
      <h3>{t("Full name")}: {student.last_name + ' ' + student.first_name}</h3>

      { hasFeedback && <h3> {t("Feedback")} </h3> }

      { feedbackText && feedbackText.length > 0 && <div dangerouslySetInnerHTML={{ __html: feedbackText }} /> }

      {
        feedback && feedback.length > 0 && feedback.map(file => (
          <div key={file}>
            <audio src={config.uploadDir + '/' + file} controls />
          </div>
        ))
      }

      <br/>
      { submissionMarkup }
    </div>
  );
}
