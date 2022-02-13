import ContactPage from '@/pages/contact'
import { render, screen } from '@testing-library/react'

describe('', () => {
  it('renders a heading', () => {
    render(<ContactPage  />)
    const heading = screen.getByRole('heading', {
      name: /contact me/i,

    })
    expect(heading).toBeInTheDocument()
  })
})
