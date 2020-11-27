import { TimelineEventCard } from './TimelineEventCard.component'
const story = {
  component: TimelineEventCard,
  title: 'Sidebar/TimelineEventCard',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const EventCard = () => <TimelineEventCard onClick={console.log} text={'stuff'} />
export default story
