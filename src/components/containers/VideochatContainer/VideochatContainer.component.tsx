import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Event } from '../../../interfaces/generated-types'

interface Props {
  event: Event
}
export const VideochatContainer: React.FC<Props> = () => {
  const styles = useStyles()
  return <Grid className={styles.root}>{'hi'}</Grid>
}
const useStyles = makeStyles(() => ({
  root: {
    padding: 4,
  },
}))
