import NewEventSidebar from './NewEventSidebar'

const story = {
  component: NewEventSidebar,
  title: 'Sidebar',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}
export const NewEvent = () => <NewEventSidebar onClose={() => console.log()} open />
export default story
