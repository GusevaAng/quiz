import React from 'react' 
import styles from './Footer.module.scss'


const Footer = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <p className={styles.footerText}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima ullam, iure voluptatem deleniti nesciunt. </p>
        </div>
    )
}

export default Footer