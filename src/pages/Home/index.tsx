import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Level from '../../components/Level'

import api from '../../lib/api'
import { MusicTypes } from '../../lib/types'

import arrow from '../../assets/arrow.svg'
import logoMic from '../../assets/mic.svg'

import {
  Container,
  TotalMusic,
  FirstSide,
  SecondSide,
  MusicWrapper,
  MusicIcon,
  MusicName,
  Header,
  LogoMic,
  HeaderTitle,
  Music,
  CurrentMusic,
  CurrentMusicName,
  CurrentMusicAuthor,
  CurrentMusicLyrics,
} from './styles'

const Home: React.FC = () => {
  const history = useHistory()
  const [musics, setMusics] = useState<MusicTypes[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const setMax = useCallback((last: number) => {
    const n = Math.min(last, musics.length)
    console.log(n)
    if (n === musics.length) return 0
    return n + 1
  }, [musics])
  const setMin = useCallback((last) => {
    const n = Math.max(last - 1, 0)
    console.log(n)
    return n
  }, [musics])

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.code === 'ArrowDown') {
        return setCurrentIndex(setMax)
      } else if (e.code === 'ArrowUp') {
        return setCurrentIndex(setMin)
      }
    })
    api.get('/musics').then(res => {
      setMusics(res.data)
    })
    setCurrentIndex(0)
  }, [])
  return (
    <>
      <TotalMusic>Total de Musicas: 15</TotalMusic>
      <Container>
        <FirstSide>
          <Header>
            <LogoMic src={logoMic} alt="Microfone" />
            <HeaderTitle>
              Escolha uma musica e <br />
              começe a cantar
            </HeaderTitle>
          </Header>
          <Music>
            <CurrentMusic>
              <CurrentMusicName>{musics[currentIndex]?.name}</CurrentMusicName>
              <CurrentMusicAuthor>{musics[currentIndex]?.author}</CurrentMusicAuthor>
            </CurrentMusic>
            <CurrentMusicLyrics>{musics[currentIndex]?.lyrics[0].split('\n').map((t, i) => (
              <span key={i}>
                {t}<br />
              </span>
            ))}</CurrentMusicLyrics>
          </Music>
        </FirstSide>
        <SecondSide>
          <MusicWrapper>
            <MusicName>Hey! Pai</MusicName>
            <MusicIcon src={arrow} alt="Seta" className="up" />
          </MusicWrapper>
          <MusicWrapper>
            <MusicName>Hey! Pai</MusicName>
            <MusicIcon src={arrow} alt="Seta" className="down" />
          </MusicWrapper>
        </SecondSide>
      </Container>
      <Level level={musics[currentIndex]?.level} />
    </>
  )
}

export default Home
