import { createContext, useReducer } from 'react';

import questions from '../data/questions';
import * as types from './types';

const initialState = {
  gameStage: types.STAGE_START,
  questions,
  currentQuestion: 0,
};

const quizReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case types.CHANGE_STATE:
      return { ...state, gameStage: types.STAGE_PLAYING };

    case types.REODER_QUESTIONS:
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });

      return { ...state, questions: reorderedQuestions };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
