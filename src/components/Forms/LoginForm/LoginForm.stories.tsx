import { action } from "@storybook/addon-actions"
import { BaseMeta } from "@storybook/addons"
import { LoginForm } from "./LoginForm.component"
const story: BaseMeta<typeof LoginForm> = {
  component: LoginForm,
  title: "Form/Login",
}

export const Basic = () => <LoginForm onSubmit={action("clicked")} />
export default story
