import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import faker from 'faker';
import EventModal from './EventModal'

interface Props {
  event: {
    name: string;
    title: string;
    description: string;
    datetime: Date;
    duration: number;
    online: Boolean;
    location: string;
  };
  id: number;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


/**
 * This is the EventCard that has  images and will be used on the event timeline and the map
 * DEVELOP:
 */
// TODO: This will be the card for an Event that has images

const DetailedEventCard: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState()
  const handleClose = () => {
    setOpen(false)
  }
  console.log(props)
  return (
    <>
      <EventModal open={open} event={props.event} handleClose={handleClose} />
      <Card className={classes.root}>
        <CardActionArea onClick={() => setOpen(true)}>
          <CardMedia
            className={classes.media}
            image={faker.image.nature()}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.event.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.event.datetime.toString()}
              <br />
              {props.event.duration} mins
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add
        </Button>
          <Button size="small" color="primary">
            Details
        </Button>
          {/* <Button size="small" color="primary" onClick={() => { router.push(`${router.pathname}/${props.event.id}/room`) }} >
            Join
        </Button> */}

        </CardActions>
      </Card>
    </>
  )
}

export default DetailedEventCard