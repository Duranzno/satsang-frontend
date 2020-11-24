import { action } from "@storybook/addon-actions"
import { EventForm } from "./EventForm.component"
const story = {
  component: EventForm,
  title: "Form",
  parameters: { actions: { argTypesRegex: "^on.*" } },
  argTypes: { onSuccess: { action: "clicked" } },
}

export const NewEvent = () => <EventForm onSubmit={() => action("clicked")} />
export default story
