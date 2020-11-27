import { action } from '@storybook/addon-actions'
import { LoginForm } from './LoginForm.component'
const story = {
  component: LoginForm,
  title: 'Form/Login',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const Login = () => <LoginForm onSuccess={action('clicked')} />
export default story
