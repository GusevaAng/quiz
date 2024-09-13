import React from 'react' 
import styles from './Feedback.module.scss'
import FeedbackForm from './FeedbackForm/FeedbackForm'


const Feedback: React.FC = () => {

    // @TODO имитация отправки обратной связи
    const handleSubmit = (email: string, feedback: string) => {
        console.log('Отзыв успешно отправлен:  ', {email, feedback})
    }

    return (
        <div className={styles.container}>
            <h5 className={styles.sectionTitle}> Будем рады вашим вопросам и предложениям </h5>
            <FeedbackForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Feedback