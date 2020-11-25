import { action } from "@storybook/addon-actions"
import { EventCard as EventCardBase } from "./EventCard.component"
const story = {
  component: EventCardBase,
  title: "Cards",
  parameters: { actions: { argTypesRegex: "^on.*" } },
  argTypes: { onSuccess: { action: "clicked" } },
}

export const EventCard = () => <EventCardBase onClick={action("clicked")} />
export default story
