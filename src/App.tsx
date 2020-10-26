import React from 'react'
import { ThemeProvider } from 'styled-components'
import Router from './Router'
import { GlobalStyle, theme } from './styles'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
