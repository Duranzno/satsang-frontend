import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
export const LocalContainer: React.FC<Props> = () => {
  const styles = useStyles()
  return <Grid className={styles.root}>{'hi'}</Grid>
}
const useStyles = makeStyles(() => ({
  root: {
    padding: 4,
  },
}))
