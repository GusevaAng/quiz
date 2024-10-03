import React from 'react'
import styles from './Main.module.scss'
import Header from './Header/Header'
import { ScrollProvider } from './Header/ScrollContext'
import Welcome from './Welcome/Welcome'
import Rules from './Rules/Rules'
import QuizTopics from './QuizTopics/QuizTopics'
import Feedback from './Feedback/Feedback'
import Footer from './Footer/Footer'


const Main = () => {
    return (
        <ScrollProvider>
            <div className={styles.mainСontent}>
                <Header />
                <Welcome />
                <Rules />
                <section id='topics'>
                    <QuizTopics /> 
                </section>
                <section id='feedback'>
                    <Feedback />
                </section>
                <Footer />
            </div>
        </ScrollProvider>
    )
}

export default Main