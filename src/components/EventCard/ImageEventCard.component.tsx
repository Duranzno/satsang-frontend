import React from 'react'
import { CardActionArea, CardMedia, makeStyles, Theme } from '@material-ui/core'
import { formatDistanceToNow } from 'date-fns'
import { Event } from '../../interfaces/generated-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CalendarTodayOutlined, LocationOnOutlined } from '@material-ui/icons'

interface Props {
  onClick: Function
  event: Event
  color?: string
}

export const ImageEventCard: React.FC<Props> = ({ onClick: propOnClick, color, event }) => {
  const { title, photoUrls, datetime } = event
  const classes = useStyles({ color: color ?? '#F95A2C' })
  const onClick = () => propOnClick(event)
  const date = formatDistanceToNow(new Date(datetime))
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick}>
        {photoUrls[0] && (
          <CardMedia
            className={classes.media}
            image={photoUrls[0]}
            title={`${title} Event Image`}
          />
        )}
        <CardContent className={classes.content}>
          <Typography variant="h4" component="h4" className={classes.title} gutterBottom>
            {title}
          </Typography>
          <div className={classes.subContainer}>
            <LocationOnOutlined />
            <Typography
              variant="body1"
              align="left"
              className={classes.subtitle}
              noWrap
              gutterBottom
            >
              Milk way,Mars
            </Typography>
          </div>
          <div className={classes.subContainer}>
            <CalendarTodayOutlined />
            <Typography variant="body1" align="left" className={classes.subtitle} noWrap>
              {date}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const useStyles = makeStyles<Theme, { color: string }>((theme) => ({
  root: {
    minWidth: theme.spacing(60),
    minHeight: 150,
    maxWidth: 345,
  },
  media: ({ color: backgroundColor }) => ({
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundColor,
  }),
  content: {
    padding: theme.spacing(2, 5, 4),
  },
  subContainer: {
    display: 'flex',
  },
  title: {
    fontWeight: 900,
  },
  subtitle: {
    marginLeft: theme.spacing(4),
    color: theme.palette.text.hint,
  },
  pos: {
    marginBottom: 12,
  },
}))
