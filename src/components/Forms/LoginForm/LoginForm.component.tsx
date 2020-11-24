import React from "react"
import { Container, Typography, InputAdornment, Grid } from "@material-ui/core"

import useStyles from "../AuthForm.styles"
import { strings } from "../../../constants"
import Form from "../Form"
import { LoginInput, LoginInputType } from "../validations"
import { FORM_ERROR } from "final-form"
import ChevronRight from "@material-ui/icons/ChevronRight"
import Person from "@material-ui/icons/Person"
import Lock from "@material-ui/icons/Lock"
import { TextField } from "mui-rff"
import Link from "next/link"

interface Props {
  onSuccess?: Function
}

export const LoginForm: React.FC<Props> = (props) => {
  const classes = useStyles()
  const onSubmit = async (values: LoginInputType) => {
    try {
      // await loginMutation(values)
      console.log(await Promise.resolve(values))
      props.onSuccess?.()
    } catch (error) {
      if (error.name === "AuthenticationError") {
        return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
      } else {
        return {
          [FORM_ERROR]:
            "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
        }
      }
    }
  }
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography component="h2" variant="h2" className={classes.title}>
        {strings.auth.loginTitle}
      </Typography>

      <Form
        submitText={strings.auth.loginTitle}
        schema={LoginInput}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        className={classes.form}
        buttonProps={{
          variant: "contained",
          color: "secondary",
          fullWidth: true,
          size: "large",
          endIcon: <ChevronRight />,
          className: classes.submit,
        }}
      >
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              variant="outlined"
              name="email"
              label={strings.auth.signupEmail}
              placeholder={strings.auth.signupEmail}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              name="password"
              label={strings.password}
              placeholder={strings.password}
              type="password"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              required
            />
          </Grid>
        </Grid>
      </Form>

      <div>
        {strings.auth.loginGoSignup1} <Link href="/signup">{strings.auth.loginGoSignup2}</Link>
      </div>
    </Container>
  )
}
