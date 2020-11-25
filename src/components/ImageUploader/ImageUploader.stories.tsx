import { action } from '@storybook/addon-actions'
import { ImageUploader as ImageUploaderBase } from './ImageUploader.component'
const story = {
  component: ImageUploaderBase,
  title: 'Cards',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}

export const ImageUploader = () => <ImageUploaderBase uploadFile={action('clicked')} />
export default story
