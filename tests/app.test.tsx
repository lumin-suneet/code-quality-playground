import {render, screen, fireEvent} from '@testing-library/react'
import App from "../src/App"

describe("App", () => {
  it("renders button", () => {
    render(<App />)
    expect(screen.getByRole("button")).toHaveTextContent("count is 0")
  })
  it("it increments count when button is clicked", () => {
    render(<App />)
    const button = screen.getByRole("button")
    expect (button).toHaveTextContent("count is 0")

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1")
  })
})