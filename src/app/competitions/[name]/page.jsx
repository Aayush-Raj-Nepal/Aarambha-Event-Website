import React from 'react'
import { Container } from '@/components/Container'

export default function Page({ params }) {
  return (
    <>
      <Container>
        <div>
          <h1>{params.name}</h1>
        </div>
      </Container>
    </>
  )
}
