import { createContext, useReducer } from 'react';

import questions from '../data/questions_complete';
import * as types from './types';

const initialState = {
  gameStage: types.STAGE_START,
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  help: false,
  optionToHide: null,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_STATE: {
      return {
        ...state,
        gameStage: types.STAGE_CATEGORY,
      };
    }

    case types.START_GAME: {
      let quizQuestions = null;

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: types.STAGE_PLAYING,
      };
    }

    case types.REODER_QUESTIONS: {
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      };
    }

    case types.CHANGE_QUESTION: {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? types.STAGE_END : state.gameStage,
        answerSelected: false,
        help: false,
      };
    }

    case types.NEW_GAME: {
      return initialState;
    }

    case types.CHECK_ANSWER: {
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
    }

    case types.SHOW_TIP: {
      return {
        ...state,
        help: 'tip',
      };
    }

    case types.REMOVE_OPTION: {
      const questionWithoutOption = state.question[state.currentQuestion];

      let repeat = true;
      let optionToHide;

      questionWithoutOption.options.forEach((option) => {
        if (option !== questionWithoutOption.answer && repeat) {
          optionToHide = option;
          repeat = false;
        }
      });

      return {
        ...state,
        optionToHide,
        help: true,
      };
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
