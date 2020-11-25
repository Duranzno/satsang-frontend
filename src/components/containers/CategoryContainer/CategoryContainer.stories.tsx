import { CategoryContainer as CategoryContainerBase } from './CategoryContainer.component'
const story = {
  component: CategoryContainerBase,
  title: 'Containers',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const CategoryContainer = () => (
  <CategoryContainerBase categories={[{ id: 1, name: 'Meditation' }]} />
)
export default story
