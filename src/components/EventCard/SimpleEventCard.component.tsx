import { CardActionArea, makeStyles, Theme, Chip } from '@material-ui/core'
import React from 'react'
import { Event } from '../../interfaces/generated-types'
import { format } from 'date-fns'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

interface Props {
  onClick: Function
  event: Event
  color?: string
}

export const SimpleEventCard: React.FC<Props> = ({ onClick: propOnClick, color, event }) => {
  const classes = useStyles({ color: color ?? '#F95A2C' })
  const { title, datetime } = event
  const onClick = () => propOnClick(event)
  const date = format(new Date(datetime), 'dd LLLL, y')
  return (
    <Card raised className={classes.root}>
      <CardActionArea className={classes.button} onClick={onClick}>
        <CardContent>
          <Typography align="center" className={classes.title} color="textSecondary" variant="h5">
            {title}
          </Typography>
          <div className={classes.subContainer}>
            <Typography variant="subtitle2" align="left" color="textSecondary" noWrap>
              {date}
            </Typography>
            <Chip
              label="Christian Meditation"
              variant="outlined"
              size="small"
              className={classes.chip}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
const useStyles = makeStyles<Theme, { color: string }>((theme) => ({
  root: ({ color: backgroundColor }) => ({
    backgroundColor,
    maxWidth: theme.spacing(80),
  }),
  subContainer: {
    display: 'flex',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
  },
  date: {
    fontWeight: 500,
  },
  chip: {
    marginLeft: theme.spacing(2),
    backgroundColor: '#FFF',
  },
  title: {
    fontWeight: 800,
  },
}))
