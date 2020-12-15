import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Copyright from '../src/Copyright'


import {LoginForm} from '../src/components/Forms/LoginForm/LoginForm.component'

export default function Login() {
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
