import { useState } from 'react'
import { Container, FilterBar, Footer, Header, ItemsList } from './components'

function App() {

  return (
    <>
      <Header/>
        <Container>
            <FilterBar/>
            <ItemsList/>
        </Container>
      <Footer/>
    </>
  )
}

export default App
