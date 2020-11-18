import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import ProTip from "../src/ProTip"
import Copyright from "../src/Copyright"
import { useGetAllEvents } from "../generated-types"

export default function Index() {
  const { data: events } = useGetAllEvents({})
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <p>{JSON.stringify(events)}</p>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
