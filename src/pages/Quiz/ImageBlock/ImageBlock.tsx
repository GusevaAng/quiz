import React from 'react' 
import styles from './ImageBlock.module.scss'


interface IImageBlock {
    image: string | undefined;
}

const ImageBlock: React.FC<IImageBlock> = ({ image }) => {
    return (
        <div className={styles.image}>
            <img src={ image } alt="for this question" className={styles.imageContent} />
        </div>
    )
}

export default ImageBlock