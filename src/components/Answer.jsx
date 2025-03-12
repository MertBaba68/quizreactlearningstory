import "../styles/Answer.css"
import {useState} from "react";

const Answer = ({ answer, onClickAnswer }) => {
    const[isShaking, setIsShaking] = useState(false);

    const handleClick = () => {
        if (!answer.correct) {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 750);
        }
        onClickAnswer(answer.correct)
    }

    return (
        <div onClick={handleClick}
             className={`answer-container ${isShaking ? "shake" : ""}`}
        >
            <h3 className="answer-text" >{answer.text}</h3>
        </div>
    )
}

export default Answer