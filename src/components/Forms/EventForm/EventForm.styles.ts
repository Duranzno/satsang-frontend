import { makeStyles, createStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {

    },
    form: {

    },
    maxWidth: { maxWidth: theme.spacing(400) },
    title: {},
    submit: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  })
});
export default useStyles