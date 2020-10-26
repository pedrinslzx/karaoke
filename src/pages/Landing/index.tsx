import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import nameLogo from '../../assets/name.svg'
import { useButtonsNavigation } from '../../lib/useButtons'

import { Container, Wrapper, Image, Button, Copyright } from './styles'

const Landing: React.FC = () => {
  const history = useHistory()
  const playButton = useRef<HTMLButtonElement>(null)
  const optionButton = useRef<HTMLButtonElement>(null)
  useButtonsNavigation({
    el: [playButton, optionButton]
  })
  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <Image src={nameLogo} alt="Karaoke Gospel" />
            <Button ref={playButton} onClick={() => history.push('/app')}>
              Jogar
            </Button>
            <Button ref={optionButton} onClick={() => history.push('/config')}>
              Opções
            </Button>
          </div>
        </Wrapper>
      </Container>
      <Copyright>By Pedro Henrique</Copyright>
    </>
  )
}

export default Landing
