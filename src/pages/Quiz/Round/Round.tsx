import React, { useEffect, useState } from 'react' 
import styles from './Round.module.scss'
import { useNavigate, useParams } from 'react-router'
import { IQuestion, IQuizTopic, IRound, mockDataQuizQuestions } from '../../../data/mock-data-quiz-questions'
import CardRound from '../CardRound/CardRound'
import ImageBlock from '../ImageBlock/ImageBlock'
import { useSearchParams } from 'react-router-dom'


const DEFAULT_TIMER = 60

const Round: React.FC = () => {

    const { topic_id } = useParams<{ 
        topic_id: string,
    }>()
    const [searchParams] = useSearchParams();


    const [ currentTopic, setCurrentTopic ] = useState<IQuizTopic>()
    const [ currentRound, setCurrentRound ] = useState<IRound>()
    const [ currentQuestion, setCurrentQuestion ] = useState<IQuestion>()

    const roundNumber = searchParams.get(`roundNumber`)

    useEffect(() => {
        const dataCurrentTopic = () => {
            const topic = mockDataQuizQuestions.quiz_topic.find((t) => t.topic_id.toString() === topic_id)
            if (topic && roundNumber) {
                setCurrentTopic(topic)
                setCurrentRound(topic.topic_rounds[Number(roundNumber) - 1])
                setCurrentQuestion(topic.topic_rounds[Number(roundNumber) - 1].round_questions[0])
            }
        }
        dataCurrentTopic()
    }, [topic_id, roundNumber])


    const [ timer, setTimer] = useState(currentRound?.round_timer || DEFAULT_TIMER)

    useEffect(() => {
        if (currentRound?.round_timer) {
            setTimer(currentRound?.round_timer)
        }

    }, [currentRound?.round_timer])

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null
        // проверка есть ли текущий вопрос, чтобы запустить таймер. И не запускать таймер, если нет вопроса
        if (currentQuestion) {
            interval = setInterval(() => {
                setTimer((t) => t - 1)
            }, 1000)
        }
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [currentQuestion])


    const navigate = useNavigate()
    // смена вопросов в раунде и переход к ответам по истечению вопросов
    useEffect(() => {
        if (timer === 0 && currentRound && currentRound.round_questions?.length > 0) {
            const currentQuestionIndex = currentRound.round_questions?.indexOf(currentQuestion!)
            
            if (currentQuestionIndex < currentRound.round_questions?.length - 1) {
                setCurrentQuestion(currentRound.round_questions[currentQuestionIndex + 1])
                setTimer(currentRound?.round_timer || DEFAULT_TIMER)
            } else {
                // переход к ответам
                console.log('раунд окончен')
                navigate(`/quiz/${currentTopic?.topic_id}/${currentRound.round_number}/answers`)
            }
        }
    }, [timer, currentQuestion, currentRound, navigate, currentTopic])


    // @TODO сделать переход к следующему вопросу при нажатии на пробел


    return (
        <div className={styles.container}>
            <div className={styles.roundContent}>
                <div className={styles.header}>
                    <p className={styles.roundNumber}> Раунд #{currentRound?.round_number} </p>
                    <p className={styles.roundName}> {currentRound?.round_name} </p>
                    <p className={styles.questionNumber}> Вопрос {currentQuestion?.id} из {currentRound?.round_questions?.length} </p>
                </div>
                <div className={styles.questions}>
                    {currentQuestion && (
                        <CardRound 
                            key={currentQuestion.id}    
                            question={currentQuestion.question}
                            timer={timer}
                            maxTimer={currentRound?.round_timer || DEFAULT_TIMER}
                        />
                    )}   
                </div>
                    {currentQuestion?.image && (
                        <div className={styles.questionsImage}>
                            {currentQuestion && (
                                <ImageBlock
                                    key={currentQuestion.id}
                                    image={currentQuestion.image}
                                />
                            )}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Round