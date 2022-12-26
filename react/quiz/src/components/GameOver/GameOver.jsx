import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import welldone from '../../img/welldone.svg';
import './GameOver.css';
import * as types from '../../context/types';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas.
      </p>
      <img src={welldone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: types.NEW_GAME })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
