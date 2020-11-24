import { BaseMeta } from "@storybook/addons"
import { Videochat } from "./Videochat.component"
const story: BaseMeta<typeof Videochat> = {
  component: Videochat,
  title: "Videochat",
}

export const Basic = () => <Videochat roomName="" />
export default story
