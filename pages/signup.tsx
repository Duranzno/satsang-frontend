import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Copyright from '../src/Copyright'


import {SignupForm} from '../src/components/Forms/SignupForm/SignupForm.component'

export default function SignUp() {

  return (
    <div className="top-grid">
      <div className="top-flex">
        <div className="width-div">
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                {/* <p>{JSON.stringify(events)}</p> */}
                <SignupForm />
              </Typography>
              {/* <ProTip /> */}
              <Copyright />
            </Box>
          </Container>
        </div>
      </div>
    </div>
  )
}
