import Header from "./Header.jsx";
import Answers from "./Answers.jsx";
import "../styles/Page.css"
import {useEffect, useState} from "react";
import {getRandomQuiz} from "../utils/DummyDataService.jsx";

function Page() {
    const[quiz, setQuiz] = useState("");
    const[prevQuiz, setPrevQuiz] = useState("");

    useEffect(() => {
        setQuiz(getRandomQuiz())
    }, []);

    const handleAnswer = (answer) => {
        if (answer === true) createNewQuiz(prevQuiz);
    }

    const createNewQuiz = () => {
        let newQuiz = getRandomQuiz()

        while (newQuiz === prevQuiz) {
            newQuiz = getRandomQuiz();
        }

        setPrevQuiz(quiz);
        setQuiz(newQuiz);
    }

    return (
        <>
            <div className="page-container">
                {quiz ? (
                    <>
                        <Header question={quiz.question} />
                        <Answers answers={quiz.answers} onClickAnswers={handleAnswer} />
                    </>
                ) : (
                    <p>Loading...</p>
                    )}
            </div>
        </>
    )
}

export default Page
