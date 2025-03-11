import '../styles/Question.css'

function Question({ question }) {

    return (
        <>
            <div className="question-container">
                <span className="question-question">{question}</span>
            </div>
        </>
    )
}

export default Question
