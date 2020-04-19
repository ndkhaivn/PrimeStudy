import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Intent, ProgressBar } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../../redux/actions/lesson';

import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import config from '../../config'

export default function Submission(props) {

  const uploadApi = `${config.apiEndpoint}/files`;

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: uploadApi, headers: { accept: 'application/json' } } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
      inputContent="Submit images here"
    />
  );
}
