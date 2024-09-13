import React, { useState } from 'react' 
import styles from './FeedbackForm.module.scss'
import arrowIcon from '../../../../assets/icon-arrow.png'


interface IFeedbackForm {
    onSubmit: (email: string, feedback: string) => void
}


const FeedbackForm: React.FC<IFeedbackForm> = ( {onSubmit} ) => {

    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(email, feedback)
        setEmail('')
        setFeedback('')
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email' 
                    placeholder='example@email.com' 
                    className={styles.email}
                    required
                />
                <input 
                    type="text" 
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    name='feedback'
                    placeholder='Введите текст сообщения...' 
                    className={styles.feedback}
                    required
                />
                <button type='submit' className={styles.imageButton}> 
                    <img src={ arrowIcon } alt="arrow" className={styles.arrowButton} /> 
                </button>
            </form>
        </div>
    )
}

export default FeedbackForm