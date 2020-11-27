import { StaticSidebar as StaticSidebarBase } from './StaticSidebar.component'
const story = {
  component: StaticSidebarBase,
  title: 'Sidebar/Static',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const StaticSidebar = () => <StaticSidebarBase />
export default story
