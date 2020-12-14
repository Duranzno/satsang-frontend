import { render, fireEvent } from '@testing-library/react'
import Button from './button.component'
test('testing random button', async () => {
  const text = 'text'
  const { getByText } = render(<Button text={text} />)

  // Click button
  fireEvent.click(getByText(text))

  // Wait for page to update with query text
  // expect(true).toBeTruthy()
})
