import React, { useEffect, useState } from 'react' 
import styles from './AnswersAfterRound.module.scss'
import { mockDataQuizQuestions } from '../../../data/mock-data-quiz-questions'
import { useNavigate, useParams } from 'react-router'
import CardAnswersAfterRound from './CardAnswersAfterRound/CardAnswersAfterRound'
import answersImageOne from '../../../assets/rules1.png'
import answersImageTwo from '../../../assets/rules3.png'


const AnswersAfterRound: React.FC = () => {

    const { topic_id, round_number } = useParams<{ topic_id: string, round_number: string }>()

    const [answersCurrentRound, setAnswersCurrentRound] = useState<string[]>()

    useEffect(() => {
        const dataCurrentAnswers = (): void => {
            const topic = mockDataQuizQuestions.quiz_topic.find((t) => t.topic_id.toString() === topic_id)
            if (topic) {
                const round = topic.topic_rounds.find((r) => r.round_number.toString() === round_number)
                if (round) {
                    const answers = round.round_questions.map((q) => q.answer)
                    setAnswersCurrentRound(answers)
                }
            }
        }
        dataCurrentAnswers()
    },[round_number, topic_id])


    const [showAnswers, setShowAnswers] = useState(false)

    const navigate = useNavigate()
    const nextRound = Number(round_number) + 1

    const handleButtonAnswers = () => {
        if (!showAnswers) {
            setShowAnswers(true)
        } else {
            if (nextRound < 5) {
                // navigate(`/quiz/${topic_id}/round?number=${nextRound}`)

                navigate(`/quiz/${topic_id}/round?roundNumber=${nextRound}`)
            } else {
                navigate('/quiz/finish')
            }
            
        }
    }




    return (
        <div className={styles.container}>
            <div className={styles.answersContent}>
                <h5 className={styles.header}> Проверим ответы? </h5>
                <button onClick={handleButtonAnswers} className={styles.whiteButton}>  
                    {/* {showAnswers ? 'Следующий раунд!' : 'Показать ответы'} */}
                    {!showAnswers ? 'Показать ответы' : nextRound < 4 ? 'Следующий раунд!' : 'Завершить игру!'}
                </button>
                {showAnswers && (
                    <div className={styles.answers}>
                        {answersCurrentRound && (
                            <CardAnswersAfterRound 
                                answers={answersCurrentRound}
                            />
                        )}
                    </div>
                )}
            </div>
            <img src={answersImageOne} alt="astronaut" className={styles.imageOne} />
            <img src={answersImageTwo} alt="" className={styles.imageTwo}/>
        </div>
    )
}

export default AnswersAfterRound