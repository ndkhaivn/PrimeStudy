import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Intent } from '@blueprintjs/core';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
  position: 'relative',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

export default function Submission(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        files.concat(
          acceptedFiles
            .filter(file => // filter files that have been uploaded before
              !files.map(file2 => file2.name).includes(file.name)
            ) // then attach preview
            .map((file) => 
             Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <Button
        className="corner-button"
        icon="cross"
        intent={Intent.DANGER}
        onClick={() => {
          setFiles(files.filter((curFile) => curFile.name !== file.name));
        }}
      />
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container text-center">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Button outlined>Click here to select images...</Button>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
      <Button disabled={files.length === 0} intent={Intent.PRIMARY}>
        Submit
      </Button>
    </section>
  );
}
