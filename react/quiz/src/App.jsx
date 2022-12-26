import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';

import './App.css';
import * as types from './context/types';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: types.REODER_QUESTIONS });
  });

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === types.STAGE_START && <Welcome />}
      {quizState.gameStage === types.STAGE_PLAYING && <Question />}
    </div>
  );
}

export default App;
