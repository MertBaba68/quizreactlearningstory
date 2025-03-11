import '../styles/Answers.css'

function Answers({ answers }) {

    return (
        <>
            <div className="answers-container">
                {answers.map(answer => (
                    <div key={answer.id} correct={answer.correct.toString()} className="answers-answer">{answer.text}</div>

                ))}
            </div>
        </>
    )
}

export default Answers
