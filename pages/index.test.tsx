import { render } from "@testing-library/react"
import React from "react"

import Home from "./index"

test.skip("renders blitz documentation link", () => {
  // This is an example of how to ensure a specific item is in the document
  // But it's disabled by default (by test.skip) so the test doesn't fail
  // when you remove the the default content from the page

  // This is an example on how to mock api hooks when testing

  const { getByText } = render(<Home />)
  const linkElement = getByText(/Documentation/i)
  expect(linkElement).toBeInTheDocument()
})
