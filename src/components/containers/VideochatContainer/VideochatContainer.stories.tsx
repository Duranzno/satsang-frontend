import { VideochatContainer as VideochatContainerBase } from './VideochatContainer.component'
const story = {
  component: VideochatContainerBase,
  title: 'Containers/Videochat',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const VideochatContainer = () => (
  <VideochatContainerBase
    event={{ id: 1, title: 'Meditation', datetime: `${new Date()}`, duration: 15, photoUrls: [] }}
  />
)
export default story
