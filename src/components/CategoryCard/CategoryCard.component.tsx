import { CardActionArea, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { Category } from '../../interfaces/generated-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

interface Props {
  onClick: Function
  category: Category
  isFavorite?: boolean
  color?: string
}

export const CategoryCard: React.FC<Props> = ({
  onClick: propOnClick,
  color,
  isFavorite,
  category,
}) => {
  const classes = useStyles({ color: color ?? '#F95A2C' })
  const { name } = category
  const onClick = () => propOnClick(category)
  return (
    <Card raised className={classes.root}>
      <CardActionArea className={classes.button} onClick={onClick}>
        <CardContent>
          {isFavorite && (
            <Typography
              align="center"
              className={classes.popular}
              color="textSecondary"
              variant="h6"
            >
              Popular
            </Typography>
          )}
          <Typography align="center" className={classes.title} color="textSecondary" variant="h5">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
CategoryCard.defaultProps = {
  isFavorite: false,
  color: '#F95A2C',
}
const useStyles = makeStyles<Theme, { color: string }>((theme) => ({
  root: ({ color: backgroundColor }) => ({
    maxWidth: theme.spacing(55),
    maxHeight: theme.spacing(25),
    padding: theme.spacing(5),
    backgroundColor,
  }),
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  popular: {
    fontSize: 24,
    fontWeight: 500,
  },
  title: {
    fontSize: 40,
    fontWeight: 800,
  },
}))
