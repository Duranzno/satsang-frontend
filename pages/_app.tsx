import React, { useState } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import theme from '../src/interfaces/theme'
import { StaticSidebar, TimelineSidebar, NewEventSidebar } from '../src/components/Sidebar'
import { RestfulProvider } from 'restful-react'

if (process.env.NODE_ENV !== 'production') {
  require('../mocks')
}
const base = process.env.NEXT_PUBLIC_BACKEND ?? 'https://satsang-app.herokuapp.com'
function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])
  const events = ['event1', 'event2', 'event3']
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const onClose = () => setSidebarOpen(false)
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RestfulProvider base={base}>
          <Component {...pageProps} />
          <StaticSidebar>
            <TimelineSidebar events={events} openNewEvent={() => setSidebarOpen(true)} />
          </StaticSidebar>
          <NewEventSidebar open={sidebarOpen} onClose={() => onClose()} />
        </RestfulProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}
export default MyApp
