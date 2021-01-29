import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import {
  Category,
  Difficulty,
  fetchQuizQuestions,
  Question,
} from '../src/services/api';

import Footer from '../src/components/Footer';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

function LoadingScreen() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

const QuizPage: React.FC = () => {
  // useEffect(() => {
  //   fetchQuizQuestions(
  //     5,
  //     Difficulty.EASY,
  //     Category.ENTERTAINMENT_VIDEOGAMES,
  //   ).then(response => {
  //     console.log(response);
  //     setQuestions(response);
  //   });
  // }, []);

  const router = useRouter();

  const [name, setName] = useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo className="geek-quiz" />
          <Widget>
            <Widget.Header>
              <h3>
                Pergunta 1 de
                {` ${db.questions.length}`}
              </h3>
            </Widget.Header>

            <Widget.Content>
              <h2>Titulo</h2>
              <p>Descrição</p>
              <Button>Confirmar</Button>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quiz da galera</h1>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/AndreVTavares" />
      </QuizBackground>
      <Footer />
    </>
  );
};

export default QuizPage;
