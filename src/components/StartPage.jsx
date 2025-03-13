import { useNavigate } from 'react-router-dom';
import "../styles/StartPage.css"

const StartPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="startpage-container">
                <span>Welkom op de startpagina!</span>
                <button className="startpage-button" onClick={() => navigate("/quiz")}>Start</button>
            </div>
        </>

    )
}

export default StartPage