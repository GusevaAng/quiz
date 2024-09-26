import React from 'react' 
import styles from './CardTopic.module.scss'
import { ITopics } from '../../../../data/mock-data-topics'
import { useNavigate } from 'react-router'


interface ICardTopic {
    topic: ITopics;
}

const CardTopic: React.FC<ICardTopic> = ({ topic }) => {

    const navigate = useNavigate()

    const handlePlayQuiz = () => {
        navigate(`/quiz/${topic.id}`)
      }

    return (
        <div className={styles.card}>
            <h5 className={styles.title}> {topic.topic_title} </h5>
            <p className={styles.description}> {topic.topic_description} </p>
            <button onClick={handlePlayQuiz} className={styles.whiteButton}> Играть </button>
        </div>
    )
}

export default CardTopic