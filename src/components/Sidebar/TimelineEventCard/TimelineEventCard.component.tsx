import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { ListItem } from '@material-ui/core'
import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined'
import RoomOutlined from '@material-ui/icons/RoomOutlined'
import { useStyles } from './TimelineEventCard.styles'
interface Props {
  text: string
  onClick: Function
}

export const TimelineEventCard: React.FC<Props> = ({ text, onClick }) => {
  const classes = useStyles()
  return (
    <ListItem button key={text}>
      <Card className={classes.root} onClick={() => onClick()}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {text}
          </Typography>
          <div className={classes.textContainer}>
            <CalendarTodayOutlined />
            <Typography className={classes.data} variant="body2" component="p">
              {text}``
            </Typography>
          </div>
          <div className={classes.textContainer}>
            <RoomOutlined />
            <Typography className={classes.data} variant="body2" component="p">
              {text}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </ListItem>
  )
}
