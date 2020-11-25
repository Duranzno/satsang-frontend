import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Event } from '../../../interfaces/generated-types'

interface Props {
  categories: Event[]
}
export const EventContainer: React.FC<Props> = (props) => {
  const styles = useStyles()
  const { categories } = props
  return <Grid className={styles.root}>{JSON.stringify(categories)}</Grid>
}
const useStyles = makeStyles(() => ({
  root: {
    padding: 4,
  },
}))
