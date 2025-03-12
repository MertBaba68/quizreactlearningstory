import '../styles/Header.css'
import Question from "./Question.jsx";

function Header({ question }) {

    return (
        <>
            <div className="header-container">
                <span className="header-logo" >Quizz</span>
                <Question question={question} />
            </div>
        </>
    )
}

export default Header
