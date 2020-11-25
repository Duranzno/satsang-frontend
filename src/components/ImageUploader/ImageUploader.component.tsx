import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { strings } from '../../constants'
interface Props {
  label?: string
  uploadFile: (file: File) => void
}

export const ImageUploader: React.FC<Props> = ({ label, uploadFile }) => {
  const styles = useStyles()
  const onDrop = useCallback(
    (acceptedFiles) => {
      uploadFile(acceptedFiles[0])
    },
    [uploadFile]
  )
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} className={styles.root}>
      <input {...getInputProps()} />
      <div className={styles.dropzoneContainer}>
        <Typography variant="body1" className={styles.dropzoneLabel}>
          {label ?? strings.upload}
        </Typography>
      </div>
    </div>
  )
}
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    maxWidth: theme.spacing(40),
  },
  dropzoneContainer: {
    background: theme.palette.primary.light,
    border: '1px dashed #000000',
    boxSizing: 'border-box',
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  dropzoneLabel: {
    padding: theme.spacing(4, 10),
    fontWeight: 900,
  },
}))
