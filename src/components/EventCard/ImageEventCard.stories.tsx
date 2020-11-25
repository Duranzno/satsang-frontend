import { action } from '@storybook/addon-actions'
import { ImageEventCard as ImageEventCardBase } from './ImageEventCard.component'
const story = {
  component: ImageEventCardBase,
  title: 'Cards',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const ImageEventCard = () => (
  <ImageEventCardBase
    onClick={action('clicked')}
    event={{
      title: 'DJ Night',
      datetime: `${new Date()}`,
      photoUrls: ['/mock/event.png'],
      duration: 15,
    }}
  />
)
export default story
