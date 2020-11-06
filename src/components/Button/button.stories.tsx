import { storiesOf } from "@storybook/react"

import Button from "./button.component"

storiesOf("Button", module).add("with text", () => {
  return <Button text="Hello World" />
})

storiesOf("Button", module).add("with emoji", () => {
  return <Button text="😀 😎 👍 💯" />
})
