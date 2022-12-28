import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import Option from '../Option/Option';

import './Question.css';
import * as types from '../../context/types';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  console.log(quizState);
  console.log(currentQuestion);

  const onSelectOption = (option) => {
    dispatch({
      type: types.CHECK_ANSWER,
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta de {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ? 'hide' : null}
          />
        ))}

        {!quizState.answerSelected && !quizState.help && (
          <>
            {currentQuestion.tip && (
              <button onClick={() => dispatch({ type: types.SHOW_TIP })}>Dica</button>
            )}
            <button onClick={() => dispatch({ type: types.REMOVE_OPTION })}>Excluir Uma</button>
          </>
        )}

        {!quizState.answerSelected && quizState.help === 'tip' && <p>{currentQuestion.tip}</p>}

        {quizState.answerSelected && (
          <button onClick={() => dispatch({ type: types.CHANGE_QUESTION })}>Continuar</button>
        )}
      </div>
    </div>
  );
};

export default Question;
