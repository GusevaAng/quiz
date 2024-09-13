import React, { useEffect, useMemo, useState } from 'react' 
import styles from './QuizTopics.module.scss'
import { fetchDataTopics } from '../../../data/api'
import { ITopics } from '../../../data/mock-data-topics'
import CardTopic from './CardTopic/CardTopic'


const QuizTopics: React.FC = () => {

    const [topics, setTopics] = useState<ITopics[]>([])

    useEffect(() => {
        const dataTopics = async () => {
            const data = await fetchDataTopics()
            setTopics(data)
        }
        dataTopics()
    }, [])

    const [currentType, setCurrentType] = useState(`all`)

    const prepareTopics = currentType === `all` ? topics : 
        topics.filter(el => currentType === el.topic_category)

    const topicCards = useMemo(() => {
        return prepareTopics.map((topic) => (
            <CardTopic 
                key={topic.id}
                topic={topic}
            />
        ))
    }, [prepareTopics])

    return (
        <div className={styles.container}>
            <h4 className={styles.sectionTitle}> Домашний квиз </h4>
            <div className={styles.buttonGroup}>
                <button 
                    onClick={() => setCurrentType(`all`)} 
                    className={styles.whiteButton}
                > Все игры </button>
                <button 
                    onClick={() => setCurrentType(`classical`)} 
                    className={`${styles.whiteButton} ${currentType === 'classical' ? styles.activeButton : ''}`}
                > Классическая</button>
                <button 
                    onClick={() => setCurrentType(`logic`)} 
                    className={`${styles.whiteButton} ${currentType === 'logic' ? styles.activeButton : ''}`}
                > На логику </button>
            </div>
            <div className={styles.cards}>
                {topicCards}
            </div>
           
        </div>
    )
}

export default QuizTopics