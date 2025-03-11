import '../styles/Answers.css'
import Answer from "./Answer.jsx";

function Answers({ answers, onClickAnswers }) {

    return (
        <>
            <div className="answers-container">
                {answers.map(answer => (
                    <Answer onClickAnswer={onClickAnswers} key={answer.id} answer={answer} className="answers-answer"></Answer>
                ))}
            </div>
        </>
    )
}

export default Answers
