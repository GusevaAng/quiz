import React from 'react' 
import styles from './Welcome.module.scss'
import welcomeImage from '../../../assets/welcome.png'
import welcomImageMiniOne from '../../../assets/welcome-mini1.png'
import welcomImageMiniTwo from '../../../assets/welcome-mini2.png'

const Welcome = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h5 className={styles.mainTitle}> <span> Лучшие </span>квизы каждую неделю </h5>
                <p className={styles.mainDescription}> Сохраняй сайт в закладки, чтобы не потерять. Играй вместе с друзьями, делись впечатлениями в социальных сетях </p>
            </div>
            <div className={styles.images}>
                <img src={welcomeImage} alt="planet" className={styles.imgPlanet} />
                <img src={welcomImageMiniOne} alt="ghost blue" className={styles.imgGhostBlue}/>
                <img src={welcomImageMiniTwo} alt="ghost yellow"className={styles.imgGhostYellow} />
            </div>
        </div>
    )
}

export default Welcome