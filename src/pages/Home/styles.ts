import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 30px 30px 50px;
  width: calc(100vw - 140px);
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center; 
`

export const FirstSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%; 
`

export const SecondSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%; 
`

export const MusicWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

export const MusicName = styled.div`
  font-weight: 800;
font-size: 34px;
line-height: 34px;
margin-right: 15px;
`

export const MusicIcon = styled.img`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &.right{
    transform: rotate(90deg);
  }
  &.down{
    transform: rotate(-180deg);
  }
  &.up{
    transform: rotate(0deg);
  }
  &.left{
    transform: rotate(-90deg);
  }
`

export const TotalMusic = styled.p`
  position: absolute;
  width: 169px;
  height: 28px;
  left: 16px;
  bottom: 10px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  color: #ffffff;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const LogoMic = styled.img`
  width: 117px;
  height: 117px;
  margin-right: 16px;
`

export const HeaderTitle = styled.h2`
  font-weight: 800;
  font-size: 40px;
  line-height: 42px;
`

export const Music = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin-top: 50px;
  *{
    width: 100%;
  }
`

export const CurrentMusic = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const CurrentMusicName = styled.h3`
  font-weight: 900;
  font-size: 62px;
  line-height: 34px;
  margin-bottom: 10px;
`

export const CurrentMusicAuthor = styled.h4`
  font-weight: 600;
  font-size: 31px;
  line-height: 34px;
`

export const CurrentMusicLyrics = styled.p`
  font-weight: 300;
  font-size: 34px;
  line-height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
`
