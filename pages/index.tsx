import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import ProTip from "../src/ProTip"
import Copyright from "../src/Copyright"

import Login from "../src/components/User/Login"
import Signup from "../src/components/User/Signup"

export default function Index() {
  // const { data: events } = useGetAllEvents({})

  return (
  <div className="top-grid">
    <div className="top-flex">
      <div className="width-div">
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example Hello
              <Login/>
              <Signup/>
            </Typography>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  </div>
  )
}
