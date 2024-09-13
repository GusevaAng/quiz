import React, { useRef } from 'react' 
import styles from './FinishQuiz.module.scss'
import { useNavigate } from 'react-router'


const FinishQuiz: React.FC = () => {

    const navigate = useNavigate()
    const topicsRef = useRef<HTMLDivElement>(null)

    const handleNextQuiz = () => {
        navigate('/main')
        if (topicsRef.current) {
            topicsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.finish}>
                <h5 className={styles.header}> Финишная прямая! </h5>
                <div className={styles.text}>
                    <p> Теперь вам нужно подсчитать количество баллов каждой команды.  </p>
                    <p> Выиграет та команда, у которой будет больше всего баллов.  При одинаковом количестве баллов выигрывает команда, набравшая больше баллов в последнем сыгранном раунде. </p>
                    <p> Надеемся, что вы отлично провели время! </p>
                    <p className={styles.parting}> До встрети на следующих играх! </p>
                </div>
            </div>
            <button onClick={handleNextQuiz} className={styles.whiteButton} > Выбрать другую игру </button>
            <div ref={topicsRef} />
        </div>
    )
}

export default FinishQuiz