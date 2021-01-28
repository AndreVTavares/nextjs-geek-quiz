import React, { FormEvent, useState } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import db from '../db.json';

import Footer from '../src/components/Footer';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const Home: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    router.push(`/quiz?name=${name}`);
  };

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>{db.title}</title>
        </Head>
        <QuizContainer>
          <QuizLogo className="geek-quiz" />
          <Widget>
            <Widget.Header>
              <h1>Geek Quiz</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Digite seu nome para jogar"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <Button type="submit" disabled={name.length === 0}>
                  Jogar {name}
                </Button>
              </form>
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

export default Home;
