import { createContext, useReducer } from 'react';

import questions from '../data/questions';
import * as types from './types';

const initialState = {
  gameStage: types.STAGE_START,
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_STATE:
      return { ...state, gameStage: types.STAGE_PLAYING };

    case types.REODER_QUESTIONS:
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });

      return { ...state, questions: reorderedQuestions };

    case types.CHANGE_QUESTION:
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? types.STAGE_END : state.gameStage,
      };

    case types.NEW_GAME:
      return initialState;

    case types.CHECK_ANSWER:
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
