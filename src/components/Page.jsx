import Header from "./Header.jsx";
import Answers from "./Answers.jsx";
import "../styles/Page.css"
import {useEffect, useState} from "react";
import {getRandomQuiz} from "../utils/DummyDataService.jsx";

function Page() {
    const[quiz, setQuiz] = useState("");
    const[prevQuiz, setPrevQuiz] = useState("");
    const[score, setScore] = useState(0);
    const[amountOfQuestions, setAmountOfQuestions] = useState(0);

    useEffect(() => {
        setQuiz(getRandomQuiz())
    }, []);

    const handleAnswer = (answer) => {
        if (answer === true) {
            setScore(score+1)
        }

        createNewQuiz(prevQuiz);
    }

    const createNewQuiz = () => {
        let newQuiz = getRandomQuiz()

        while (newQuiz === prevQuiz) {
            newQuiz = getRandomQuiz();
        }

        setPrevQuiz(quiz);
        setQuiz(newQuiz);
        setAmountOfQuestions(amountOfQuestions+1);
    }

    return (
        <>
            <div className="page-container">
                <span>{score}/{amountOfQuestions}</span>
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
