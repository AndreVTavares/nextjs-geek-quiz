import styled from 'styled-components'

import db from '../db.json';
import Footer from '../src/components/Footer';

import Widget from '../src/components/Widget';


const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <>
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Geek Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Conteudo do quiz fodão de geek</p>
          </Widget.Content>
        </Widget>  
        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>
          </Widget.Content>
        </Widget> 
      </QuizContainer>
    </BackgroundImage>
    <Footer/>
    </>
  )
}
