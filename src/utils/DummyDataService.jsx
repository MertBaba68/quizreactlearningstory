import DummyData from "./DummyData.jsx";


const dummyData = DummyData

export const getRandomQuiz = () => {
    return dummyData[Math.floor(Math.random() * dummyData.length)]
}