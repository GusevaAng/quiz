import React, { useEffect, useState } from 'react' 
import styles from './Quiz.module.scss'
import { useNavigate, useParams } from 'react-router'
import { IQuizTopic } from '../../data/mock-data-quiz-questions'
import { fetchDataQuizQuestions } from '../../data/api'
import quizImageOne from '../../assets/welcome-mini1.png'
import quizImageTwo from '../../assets/rules4.png'


const Quiz: React.FC = () => {

    const { topic_id } = useParams<{ topic_id: string}>()
    
    const [currentTopic, setCurrentTopic] = useState<IQuizTopic>()

    useEffect(() => {
        const dataCurrentTopic = async () => {
            const data = await fetchDataQuizQuestions()
            const topic = data.quiz_topic.find((t) => t.topic_id.toString() === topic_id)
            setCurrentTopic(topic)
        }
        dataCurrentTopic()
    }, [topic_id])

    const navigate = useNavigate()

    const handleStartQuiz = () => {
        // navigate(`/quiz/${currentTopic?.topic_id}/round?number=1`)

        navigate(`/quiz/${currentTopic?.topic_id}/round?roundNumber=1`)
    }


    return (
        <div className={styles.container}>
            <div className={styles.quizСontent}>
                <p className={styles.topicTitle}> {currentTopic?.topic_title} </p>
                <div className={styles.rules}>
                    <h5 className={styles.rulesTitle}> Ознакомимся с правилами игры :) </h5>
                    <div className={styles.rulesText}>
                        <p> Для начала разбейтесь на команды. Чтобы все было по-серьезному, вам нужно подготовить бланки: подойдет любой листочек. Квизмены домой к вам не завалятся, так что ручками придется обеспечить себя самим. </p>
                        <p> Уберите все свои гаджеты куда подальше. Гуглить — стыдно! </p>
                        <p> В каждой игре вас ждет 4 раунда, а перерывы вы можете делать перед следующим раундом. В каждом раунде по 6 вопросов. Время ответов на вопросы ограничено, а таймер запускается автоматически. </p>
                        <p> После каждого раунда обменивайтесь с соперниками бланками (в случае безоговорочного доверия вы можете проверять и самостоятельно) и считайте результат. Кто набрал больше баллов, тот и победил! Но при одинаковом количестве баллов выигрывает та команда, которая набрала больше баллов в последнем сыгранном раунде. </p>
                        <p> Если готовы ворваться в игру, то жмите "Начать" </p>
                        <p> P.s. после того, как вы нажмете на кнопку "Начать", запустится таймер, а на экране появится первый вопрос. Полетели! </p>
                    </div>
                    <button onClick={handleStartQuiz} className={styles.whiteButton}> Начать </button>
                </div>
            </div>
            <img src={quizImageOne} alt="ghost blue" className={styles.imageOne} />
            <img src={quizImageTwo} alt="astronaut" className={styles.imageTwo} />
        </div>
    )
}

export default Quiz