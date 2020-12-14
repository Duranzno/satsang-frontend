import { EventContainer as EventContainerBase } from './EventContainer.component'
const story = {
  component: EventContainerBase,
  title: 'Containers/Home',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const EventContainer = () => (
  <EventContainerBase
    events={[
      { id: 1, title: 'Meditation', datetime: `${new Date()}`, duration: 15, photoUrls: [] },
    ]}
  />
)
export default story
