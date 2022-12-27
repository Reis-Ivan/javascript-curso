import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import './Option.css';
import * as types from '../../context/types';

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="option" onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  );
};

export default Option;
