import Header from "./Header.jsx";
import Answers from "./Answers.jsx";
import "../styles/Page.css"
import {useEffect, useState} from "react";
import {getRandomQuiz} from "../utils/DummyDataService.jsx";

function Page() {
    const[quiz, setQuiz] = useState("");

    useEffect(() => {
        setQuiz(
            getRandomQuiz()
        );
        console.log(quiz);
    }, []);

    const handleAnswer = (answer) => {
        console.log(answer);
        if (answer === true) {
            setQuiz(
                getRandomQuiz()
            );
        }
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
