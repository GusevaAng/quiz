import styles from './App.module.scss'
import { Route, Routes, HashRouter } from 'react-router-dom'
import Main from './pages/Main/Main'
import Quiz from './pages/Quiz/Quiz'
import Round from './pages/Quiz/Round/Round'
import AnswersAfterRound from './pages/Quiz/AnswersAfterRound/AnswersAfterRound'
import FinishQuiz from './pages/Quiz/FinishQuiz/FinishQuiz'


function App() {
  return (
    <div className={styles.container}>
      <HashRouter>
        <Routes>
          <Route 
            path='/main'
            element={ <Main /> }
          />
          <Route 
            path='/quiz/:topic_id' 
            element={ <Quiz /> } 
          />
          <Route
            path='/quiz/:topic_id/round'
            element={ <Round /> } 
          />
          <Route 
            path='/quiz/:topic_id/:round_number/answers'
            element={ <AnswersAfterRound /> }
          />
          <Route 
            path='/quiz/finish'
            element={ <FinishQuiz />}
          />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
