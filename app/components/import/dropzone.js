import React from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.css';

export default function dropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {console.log('files variable', file)}
      {console.log('file.path', file.path)}
      {console.log('file.size', file.size)}
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="dropzone_container">
      <div {...getRootProps({ className: 'dropzone_drop' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
        {console.log('files', files)}
      </aside>
    </div>
  );
}
