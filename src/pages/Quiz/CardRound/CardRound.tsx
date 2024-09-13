import React from 'react' 
import styles from './CardRound.module.scss'
import TimerBar from '../TimerBar/TimerBar'


interface ICardRound {
    question: string;
    timer: number;
    maxTimer: number;
}

const CardRound: React.FC<ICardRound> = ({ question, timer, maxTimer }) => {
    
    return (
        <div className={styles.container}>
            <p className={styles.question}> {question} </p>
            <div className={styles.timer}>
                <p> {timer} </p>
                <TimerBar 
                    timer={timer}
                    maxTimer={maxTimer}
                />
            </div>
            
        </div>
    )
}

export default CardRound