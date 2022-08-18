import UploadLayout from "../components/UploadLayout";
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone';

const  FileUploads =(props)=> {
    const onDrop = useCallback(acceptedFiles => {
       alert('uploads')
      }, [])
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({    
    maxFiles:10,onDrop,
    accept: {
        'image/*': ['.jpeg','.jpg','.gif', '.png']
      }
   
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
   return (
     <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map(e => <li key={e.code}>{e.message}</li>)}
         </ul>

     </li>
   ) 
  });
  

  return (
    <UploadLayout>
    <section>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(10 files are the maximum number of files you can drop here)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
    <div className="d-grid text-center">
          <button className="btn btn-primary" type="submit">
           upload
          </button>
        </div>
    </UploadLayout>
  );
}
<FileUploads />

export default FileUploads;
