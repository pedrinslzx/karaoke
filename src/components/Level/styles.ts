import styled from 'styled-components'
import { FiPlay } from 'react-icons/fi'

export const Container = styled.div`
  position: absolute;
  width: 140px;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
`

export const Wrapper = styled.div`
  position: fixed;
  width: 140px;
  height: 100%;
  padding: 100px 24px 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${p => p.theme.purple};
  transition: background-color 0.6s;
`

export const Text = styled.h2`
  font-weight: bold;
  font-size: 37px;
  line-height: 34px;

  display: flex;
  align-items: center;

  color: ${p => p.theme.white};
  transform: rotate(90deg);
`

export const Icon = styled(FiPlay)`
  fill: ${p => p.theme.white};
`
