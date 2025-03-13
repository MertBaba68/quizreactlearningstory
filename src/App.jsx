import Quiz from "./components/Quiz.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from "./components/StartPage.jsx";

function App() {

  // return (
  //   <>
  //     <Quiz/>
  //   </>
  // )

    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/quiz" element={<Quiz />} />
                {/*<Route path="/results/:score" element={<ResultPage />} />*/}
            </Routes>
        </Router>
    )
}

export default App
