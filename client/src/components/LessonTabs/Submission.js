import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Intent, ProgressBar } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../../redux/actions/lesson';
import md5 from 'js-md5';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import config from '../../config';
import { useTranslation } from 'react-i18next';

export default function Submission(props) {
  const uploadApi = `${config.apiEndpoint}/files`;
  const dispatch = useDispatch();
  const student = useSelector((state) => state.user);
  const submission = useSelector((state) => state.lesson.submission);
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
    console.log(files.map((f) => f.meta));

    dispatch(
      submit({
        lessonId: 1,
        studentId: student.id,
        files: files.map((file) => file.meta.fileName),
      })
    );

    allFiles.forEach((f) => f.remove());
  };

  const submitMarkup = submission && submission.length > 0 ? (
    submission.map((file) => (
      <img className="img-review" src={config.uploadDir + '/' + file} />
    ))
  ) : (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*"
      inputContent={t("Click here to choose images")}
      submitButtonContent={t("Submit")}
      inputWithFilesContent={t("Add Files")}
    />
  );
  return <div>{submitMarkup}</div>;
}
