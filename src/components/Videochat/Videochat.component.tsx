import React from "react"

interface Props {
  roomName: string
}

export const Videochat = (props: Props) => {
  return <div>{JSON.stringify(props)}</div>
}
