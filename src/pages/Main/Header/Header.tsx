import React, { useContext } from 'react' 
import styles from './Header.module.scss'
import logoWhite from '../../../assets/logo-white.png'
import { Link } from 'react-scroll'
import { ScrollContext } from './ScrollContext'


const Header = (): JSX.Element => {

    const { scrollToQuizTopics, scrollToFeedback } = useContext(ScrollContext)

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={ logoWhite } alt="logo" className={styles.logoImage}/>
                <h1 className={styles.logoTitle}> QUIZ </h1>
            </div>
            <nav className={styles.navigation}>
                <Link
                    to={'topics'}
                    smooth={true} 
                    duration={500} 
                    onClick={scrollToQuizTopics}
                    className={styles.navLink}
                >
                    <h3 className={styles.quizTopics}> Темы квизов </h3>
                </Link>
                <Link
                    to={'feedback'}
                    smooth={true} 
                    duration={500} 
                    onClick={scrollToFeedback}
                    className={styles.navLink}
                >
                    <h3 className={styles.feedback}> Обратная связь </h3>
                </Link>
            </nav>
        </div>
    )
}

export default Header