import { action } from '@storybook/addon-actions'
import { SignupForm } from './SignupForm.component'
const story = {
  component: SignupForm,
  title: 'Form',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const Signup = () => <SignupForm onSuccess={action('clicked')} />
export default story
