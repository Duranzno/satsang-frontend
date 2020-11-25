import { action } from "@storybook/addon-actions"
import { CategoryCard as CategoryCardBase } from "./CategoryCard.component"
const story = {
  component: CategoryCardBase,
  title: "Cards",
  parameters: { actions: { argTypesRegex: "^on.*" } },
  argTypes: { onSuccess: { action: "clicked" } },
}

export const CategoryCard = () => <CategoryCardBase onClick={action("clicked")} />
export default story
