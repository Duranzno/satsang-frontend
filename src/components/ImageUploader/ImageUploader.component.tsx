import { InputLabel } from '@material-ui/core'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
interface Props {
  label?: string
  uploadFile: (file: File) => void
}

export const ImageUploader: React.FC<Props> = ({ label, uploadFile }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      uploadFile(acceptedFiles[0])
    },
    [uploadFile]
  )
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="dropzone-container">
        <InputLabel className="dropzone-label">{label}</InputLabel>
      </div>
    </div>
  )
}
ImageUploader.defaultProps = {
  label: 'Label',
}
