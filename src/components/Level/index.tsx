import React from 'react'
import { useTheme } from 'styled-components'

import { Container, Text, Icon, Wrapper } from './styles'
interface Props {
  level?: 'easy' | 'medium' | 'hard' | 1 | 2 | 3
}
const Level: React.FC<Props> = ({ level }) => {
  const theme = useTheme()

  if (level === 'easy' || level === 1) {
    return (
      <Container>
        <Wrapper style={{ background: theme.blue }}>
          <Text>Easy</Text>
          <Icon size="28px" />
        </Wrapper>
      </Container>
    )
  }
  if (level === 'medium' || level === 2) {
    return (
      <Container>
        <Wrapper style={{ background: theme.orange }}>
          <Text>Medium</Text>
          <Icon size="28px" />
        </Wrapper>
      </Container>
    )
  }
  if (level === 'hard' || level === 3) {
    return (
      <Container>
        <Wrapper style={{ background: theme.red }}>
          <Text>Hard</Text>
          <Icon size="28px" />
        </Wrapper>
      </Container>
    )
  }
  return (
    <Container>
      <Wrapper style={{ background: theme.purple }}>
        <Text> </Text>
        <Icon size="28px" />
      </Wrapper>
    </Container>
  )
}

export default Level
