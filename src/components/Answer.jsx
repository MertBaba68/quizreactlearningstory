import "../styles/Answer.css"

const Answer = ({ answer, onClickAnswer }) => {

    return (
        <div onClick={() => onClickAnswer(answer.correct)} className="answer-container" >
            <h3>{answer.text}</h3>
        </div>
    )
}

export default Answer