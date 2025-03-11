import '../styles/Question.css'

function Question({ question }) {

    return (
        <>
            <div className="question-container">
                <h1 className="question-question">{question}</h1>
            </div>
        </>
    )
}

export default Question
