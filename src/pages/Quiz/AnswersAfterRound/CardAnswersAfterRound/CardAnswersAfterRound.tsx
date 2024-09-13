import React from 'react' 
import styles from './CardAnswersAfterRound.module.scss'


interface ICardAnswersAfterRound {
    answers: string[];
}

const CardAnswersAfterRound: React.FC<ICardAnswersAfterRound> = ({ answers }) => {
    return (
        <div className={styles.container}>
            <ol className={styles.answersList}>
                {answers.map((answer, index) => (
                    <li key={index} className={styles.answer}>
                        {answer}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default CardAnswersAfterRound