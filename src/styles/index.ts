import styled, { createGlobalStyle } from 'styled-components'
import { MaterialUiPalette } from 'trend-colors'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: ${p => p.theme.back};
    color: ${p => p.theme.fore};
    width: 100vw;
    height: 100vh;
  }
  *, input, textarea, body{
    font-family: Nunito, sans-serif;
  }
`
export const theme = {
  material: MaterialUiPalette,
  back: 'linear-gradient(329.54deg, #0E0F0E 0%, #262726 100%);',
  fore: '#f1f0f1',
  yellow: '#e3b505',
  purple: '#6610f2',
  pink: '#e76b74',
  blue: '#016fb9',
  red: '#93032e',
  orange: '#b1740f',
  green: '#034c3c',
  black: '#0e0f0e',
  gray: '#808080',
  white: '#f1f0f1'
}

export const Flex = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.full {
    width: 100vw;
    height: 100vh;
  }
`
