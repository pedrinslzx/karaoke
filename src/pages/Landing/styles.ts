import styled from 'styled-components'
import micLogo from '../../assets/mic.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Wrapper = styled.main`
  width: 1145px;
  height: 534px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${() => micLogo}) no-repeat 80% center;
`
export const Image = styled.img`
  height: 158px;
  margin-bottom: 170px;
`
export const Button = styled.button`
  background: transparent;
  outline: 0;

  min-width: 290px;
  height: 80px;
  padding: 24px 64px;

  border: 4px solid ${p => p.theme.white};
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  color: ${p => p.theme.white};
  font-size: 37px;
  line-height: 34px;

  transition: background-color 0.34s, border 0.26s;

  &:hover,
  &:focus,
  &.selected {
    border: 6px solid ${p => p.theme.white};
    background: #505050;
  }

  & + button {
    margin-top: 30px;
  }
`
export const Copyright = styled.span`
  position: absolute;
  width: 175px;
  height: 30px;
  right: 9px;
  bottom: 0;

  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: right;

  /* Shapes / 01 */

  color: ${p => p.theme.white};
  opacity: 0.8;
`
