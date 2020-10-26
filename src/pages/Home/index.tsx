import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Level from '../../components/Level'

import { Container, TotalMusic } from './styles'

const Home: React.FC = () => {
  const history = useHistory()
  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.code === 'Enter') {
        history.replace('/music')
      }
    })
    return () =>
      document.removeEventListener('keydown', e => {
        if (e.code === 'Enter') {
          history.replace('/music')
        }
      })
  })
  return (
    <>
      <TotalMusic>Total de Musicas: 15</TotalMusic>
      <Container>
        <h1>Home</h1>
      </Container>
      <Level level={'easy'} />
    </>
  )
}

export default Home
