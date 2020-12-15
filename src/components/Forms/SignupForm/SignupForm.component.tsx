import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'

import useStyles from '../AuthForm.styles'
import { strings } from '../../../constants'
import Form from '../Form'
import { SignupInput, SignupInputType } from '../validations'
import { FORM_ERROR } from 'final-form'
import { TextField } from 'mui-rff'
import Link from 'next/link'
import { useCreateUser } from '../../../interfaces/generated-types'
import { useRouter } from 'next/router'

interface Props {
  onSuccess?: Function
}

export const SignupForm: React.FC<Props> = (props) => {
  const classes = useStyles()

  const { mutate: send } = useCreateUser({})

  const router = useRouter()

  const onSubmit = async (values: SignupInputType) => {
    try {
      console.log(values)
      console.log('creating new user')
      send(values).then(router.push('/login'))
      
      props.onSuccess?.()
    } catch (error) {
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        // This error comes from Prisma
        return { email: 'This email is already being used' }
      } else {
        return { [FORM_ERROR]: error.toString() }
      }
    }
  }
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography component="h2" variant="h2" className={classes.title}>
        {strings.auth.signupTitle}
      </Typography>
      <Typography component="p" variant="body1" className={classes.title}>
        {strings.auth.signupText}
      </Typography>

      <Form
        submitText={strings.auth.signupTitle}
        schema={SignupInput}
        initialValues={{ email: '', password: '', name: '' }}
        className={classes.form}
        buttonProps={{
          variant: 'contained',
          color: 'primary',
          fullWidth: true,
          size: 'large',
          className: classes.submit,
        }}
        onSubmit={onSubmit}
      >
        <Grid container spacing={2} direction="column">
          <Grid item>
            {/* <ImageUploader label={strings.auth.signupUpload} onUploadFile={setFile}></ImageUploader> */}
            <TextField
              variant="outlined"
              name="name"
              label={strings.auth.signupName}
              placeholder={strings.auth.signupName}
              required
              fullWidth
              margin="dense"
            />
            <TextField
              variant="outlined"
              name="email"
              label={strings.auth.signupEmail}
              placeholder={strings.auth.signupEmail}
              required
              fullWidth
              margin="dense"
            />
            <TextField
              variant="outlined"
              name="password"
              label={strings.password}
              placeholder={strings.password}
              type="password"
              fullWidth
              required
              margin="dense"
            />
          </Grid>
        </Grid>
      </Form>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/login">Already have an account? </Link>
      </div>
    </Container>
  )
}
