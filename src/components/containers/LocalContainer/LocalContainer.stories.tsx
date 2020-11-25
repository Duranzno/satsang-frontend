import { LocalContainer as LocalContainerBase } from './LocalContainer.component'
const story = {
  component: LocalContainerBase,
  title: 'Containers',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const LocalContainer = () => <LocalContainerBase />
export default story
