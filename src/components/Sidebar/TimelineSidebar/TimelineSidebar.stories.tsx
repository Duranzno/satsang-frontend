import { action } from '@storybook/addon-actions'
import { TimelineSidebar } from './TimelineSidebar.component'
const story = {
  component: TimelineSidebar,
  title: 'Sidebar',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const EventCard = () => <TimelineSidebar events={[]} openNewEvent={action('click')} />
export default story
