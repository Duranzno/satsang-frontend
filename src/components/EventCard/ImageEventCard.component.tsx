import { CardActionArea, makeStyles } from '@material-ui/core'
import React from 'react'
import { Event } from '../../interfaces/generated-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

interface Props {
  onClick: Function
  event: Event
  color?: string
}

export const ImageEventCard: React.FC<Props> = ({ onClick: propOnClick, color, event }) => {
  const { title } = event
  const classes = useStyles({ color: color ?? '#F95A2C' })
  const onClick = () => propOnClick(event)
  return (
    <Card>
      <CardActionArea className={classes.root} onClick={onClick}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" variant="h5" gutterBottom>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const useStyles = makeStyles<unknown, { color: string }>(() => ({
  root: ({ color: backgroundColor }) => ({
    minWidth: 275,
    minHeight: 150,
    backgroundColor,
  }),
  title: {
    fontSize: 20,
  },
  popular: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}))
