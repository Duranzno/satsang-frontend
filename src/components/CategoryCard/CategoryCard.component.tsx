import { CardActionArea, makeStyles } from '@material-ui/core'
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
    <Card>
      <CardActionArea className={classes.root} onClick={onClick}>
        <CardContent>
          {isFavorite && (
            <Typography className={classes.popular} color="textSecondary" variant="h6" gutterBottom>
              Popular
            </Typography>
          )}
          <Typography className={classes.title} color="textSecondary" variant="h5" gutterBottom>
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
