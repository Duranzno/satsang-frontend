import { NewEventSidebar } from './NewEventSidebar.component'
const story = {
  component: NewEventSidebar,
  title: 'Sidebar/New Event',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const NewEvent = () => <NewEventSidebar onClose={console.log} open={true} />
export default story
