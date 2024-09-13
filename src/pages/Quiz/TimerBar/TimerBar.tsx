import React from 'react' 
import styles from './TimerBar.module.scss'


interface ITimerBar {
    timer: number;
    maxTimer: number;
}

const TimerBar: React.FC<ITimerBar> = ({ timer, maxTimer}) => {

    const timerPercentage = ( timer * 100 ) / maxTimer

    return (
        <div className={styles.container}>
            <div 
                className={styles.timerBar} 
                style={{ 
                    width: `${timerPercentage}%`,
                    marginLeft: `${50 - timerPercentage / 2}%`,
                    marginRight: `${50 - timerPercentage / 2}%`,
                }}
            > </div>
        </div>
    )
}

export default TimerBar