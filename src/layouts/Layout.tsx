import React, { ReactNode } from "react"
import BaseLayout, { BaseLayoutProps } from "./BaseLayout"
import { createStyles, makeStyles } from "@material-ui/core"
interface LayoutProps extends BaseLayoutProps {
  children: ReactNode
}

const useStyles = makeStyles(() => {
  return createStyles({
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })
})
const Layout: React.FC<LayoutProps> = ({ children, ...props }: LayoutProps) => {
  // const [open, setOpen] = React.useState(false)
  // const events = ["Meditation 1.0", "Meditation 2.0", "Meditation 3.0"]
  // const onClose = () => setOpen(false)
  const classes = useStyles()
  return (
    <BaseLayout {...props}>
      {/* <StaticSidebar>
        <TimelineSidebar events={events} openNewEvent={() => setOpen(true)} />
      </StaticSidebar>
      <NewEventSidebar open={open} onClose={onClose} /> */}
      <div className={classes.container}>{children}</div>
    </BaseLayout>
  )
}

export default Layout
