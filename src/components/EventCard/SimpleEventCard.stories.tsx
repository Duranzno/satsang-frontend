import { action } from '@storybook/addon-actions'
import { SimpleEventCard as SimpleEventCardBase } from './SimpleEventCard.component'
const story = {
  component: SimpleEventCardBase,
  title: 'Cards',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const SimpleEventCard = () => (
  <SimpleEventCardBase
    onClick={action('clicked')}
    event={{
      title: 'Romantic dinner night',
      datetime: `${new Date()}`,
      photoUrls: ['/mock/event.png'],
      duration: 15,
    }}
  />
)
export default story
