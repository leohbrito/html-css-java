import React from 'react'
import { render, screen } from '@testing-library/react'
import { CTAButton } from '../CTAButton'
import { KPI } from '../ui'

describe('Components', () => {
  it('renders CTAButton with label', () => {
    render(<CTAButton href="/contato">Falar com Especialista</CTAButton>)
    expect(screen.getByText('Falar com Especialista')).toBeInTheDocument()
  })

  it('renders KPI', () => {
    render(<KPI value="12+" label="anos" />)
    expect(screen.getByText('12+')).toBeInTheDocument()
    expect(screen.getByText('anos')).toBeInTheDocument()
  })
})
