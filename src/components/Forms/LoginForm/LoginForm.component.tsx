import React from "react"

interface Props {
  onSubmit: Function
}

export const LoginForm: React.FC<Props> = (props) => {
  return <div>{JSON.stringify(props)}</div>
}
