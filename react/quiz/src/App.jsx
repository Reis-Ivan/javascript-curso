// React
import { useContext } from 'react';
import { QuizContext } from './context/quiz';

// Componentes
import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';
import GameOver from './components/GameOver/GameOver';
import PickCategory from './components/PickCategory/PickCategory';

// Estático
import './App.css';
import * as types from './context/types';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === types.STAGE_START && <Welcome />}
      {quizState.gameStage === types.STAGE_CATEGORY && <PickCategory />}
      {quizState.gameStage === types.STAGE_PLAYING && <Question />}
      {quizState.gameStage === types.STAGE_END && <GameOver />}
    </div>
  );
}

export default App;
