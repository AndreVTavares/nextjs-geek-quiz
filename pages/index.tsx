import db from '../db.json';

import Footer from '../src/components/Footer';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';







export default function Home() {
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
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
        <GitHubCorner projectUrl="https://github.com/AndreVTavares"/>
      </QuizBackground>
      <Footer/>
    </>
    
  )
}
