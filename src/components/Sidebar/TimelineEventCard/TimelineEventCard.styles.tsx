import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  root: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    borderRadius: '16px',
  },
  title: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 800,
  },
  pos: {
    marginBottom: 12,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'space-between',
  },
  data: {
    paddingLeft: 6,
  },
})
