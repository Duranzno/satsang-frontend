import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'
import { useGetAllEvents } from '../src/interfaces/generated-types'


import {LoginForm} from '../src/components/Forms/LoginForm/LoginForm.component'
import {SignupForm} from '../src/components/Forms/SignupForm/SignupForm.component'

export default function Index() {
  // const { data: events } = useGetAllEvents({})

  // const { data: events } = useGetAllEvents({})
  return (
    <div className="top-grid">
      <div className="top-flex">
        <div className="width-div">
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                {/* <p>{JSON.stringify(events)}</p> */}
                <LoginForm />
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
