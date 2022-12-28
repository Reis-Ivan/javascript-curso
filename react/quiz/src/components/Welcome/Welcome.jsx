import React from 'react';
import { useContext } from 'react';
import { QuizContext, QuizProvider } from '../../context/quiz';

import quiz from '../../img/quiz.svg';

import './Welcome.css';
import * as types from '../../context/types';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: types.CHANGE_STATE })}>Iniciar</button>
      <img src={quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
