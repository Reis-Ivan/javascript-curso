import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import './PickCategory.css';
import * as types from '../../context/types';
import category from '../../img/category.svg';

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: types.START_GAME, payload: category });
    dispatch({ type: types.REODER_QUESTIONS });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As parguntas serão referentes a uma das linguagens abaixo:</p>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={category} alt="Categorias do quiz" />
    </div>
  );
};

export default PickCategory;
