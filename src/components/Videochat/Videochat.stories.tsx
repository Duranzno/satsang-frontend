import { Videochat } from './Videochat.component'
const story = {
  component: Videochat,
  title: 'Videochat',
  decorators: [
    (Story: React.ComponentType) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

export const Basic = () => <Videochat room="random-named-room" />
export default story
