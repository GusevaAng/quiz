import React from 'react' 
import styles from './Rules.module.scss'
import rulesImageOne from '../../../assets/rules1.png'
import rulesImageTwo from '../../../assets/rules2.png'
import rulesImageThree from '../../../assets/rules3.png'
import rulesImageFour from '../../../assets/rules4.png'


const Rules = (): JSX.Element => {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h5 className={styles.title}> Квиз! Квиз! Дома! </h5>
                <p className={styles.description}> Это домашняя версия квиза! Играйте в любом месте и в любое время. </p>
                <img src={rulesImageOne} alt="astronaut" className={styles.imageOne} />
            </div>
            <div className={styles.card}>
                <h5 className={styles.title}> Делитесь на команды, если хотите </h5>
                <p className={styles.description}> А если не хотите — не делитесь. У себя дома вы хозяева, так что можете играть ваще как угодно: один на один, семья на семью или даже против кота.</p>
                <img src={rulesImageTwo} alt="cat" className={styles.imageTwo} />
            </div>
            <div className={styles.card}>
                <h5 className={styles.title}> Сами себе квизмены </h5>
                <p className={styles.description}> Можете превратить в бланки старые черновики, можете писать ответы на листочках или просто запоминать, что вы там наотвечали, — лишь бы проверять удобно было.</p>
                <img src={rulesImageThree} alt="star" className={styles.imageThree} />
            </div>
            <div className={styles.card}>
                <h5 className={styles.title}> Кстати, о проверке </h5>
                <p className={styles.description}> Если доверяете себе, проверяйте ответы сами, если не очень — меняйтесь бланками и проверяйте друг у друга. А можете вообще не проверять — вы же хозяева дома, помните? </p>
                <img src={rulesImageFour} alt="astronaut" className={styles.imageFour} />
            </div>
        </div>
    )
}

export default Rules