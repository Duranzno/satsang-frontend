import * as z from "zod"
import { EventDurationStep } from "../../../constants"
const ISSERVER = typeof window === "undefined";

export const EventInput = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  date: z.string(),
  time: z.string(),
  duration: z.number(),
  online: z.boolean(),
  User: {
       connect: { id: !ISSERVER ? parseInt(localStorage.getItem("session")) : ''}
        }
})
export type EventInputType = z.infer<typeof EventInput>
export const EventInputDefault: EventInputType = ({
  title: '',
  description: '',
  time: "" + new Date(),
  date: "" + new Date(),
  duration: EventDurationStep,
  online: true,
})
// const newEventValues = {
//   name: "Session Name",
//   title: "Session Title",
//   description: "Description",
//   datetime: new Date(),
//   duration: "30",
//   online: true,
//   location: "LA",
//   category: "Mindfulness",
// }