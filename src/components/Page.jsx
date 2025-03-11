import Header from "./Header.jsx";
import Answers from "./Answers.jsx";
import DummyData from "../utils/DummyData.jsx";
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

    return (
        <>
            <div className="page-container">
                {quiz ? (
                    <>
                        <Header question={quiz.question} />
                        <Answers answers={quiz.answers} />
                    </>
                ) : (
                    <p>Loading...</p>
                    )}
            </div>
        </>
    )
}

export default Page
