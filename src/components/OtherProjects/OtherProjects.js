import React, { useContext } from 'react';
import { Styled } from './OtherProjects.styles';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Bold from '../Text/Bold';
import wordle from '../../assets/images/wordle.png';
import jeopardy from '../../assets/images/jeopardy/home_jeopardy_app.png'

export const OtherProjects = () => {
  const { colorMode } = useContext(ThemeContext);
  return <Styled.ProjectOuter colorMode={colorMode}>
    <Styled.ProjectContainer>
  <Styled.Bento>
      <Styled.BentoItem colorMode={colorMode} href='https://lit-wordle.netlify.app/' target="_blank">
        <Styled.BentoImage>
          <Styled.BentoOverlay />
        </Styled.BentoImage>
        <Styled.BentoContent>
          <Bold>Wordle</Bold>
        </Styled.BentoContent>
      </Styled.BentoItem>
      <Styled.BentoItem colorMode={colorMode} href="https://jeopardy-game.vercel.app/" target="_blank">
        <Styled.BentoImage>
          <Styled.BentoOverlay />
        </Styled.BentoImage>
        <Styled.BentoContent>
          <Bold>Jeopardy!</Bold>
        </Styled.BentoContent>
      </Styled.BentoItem>
      <Styled.BentoItem colorMode={colorMode} href="https://github.com/matthewgallo/covidstat" target="_blank">
        <Styled.BentoImage>
          <Styled.BentoOverlay />
        </Styled.BentoImage>
        <Styled.BentoContent>
          <Bold>Covidstat.dev</Bold>
        </Styled.BentoContent>
      </Styled.BentoItem>
    </Styled.Bento>
  </Styled.ProjectContainer>
    </Styled.ProjectOuter>
}