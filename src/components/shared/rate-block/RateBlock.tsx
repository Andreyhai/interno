import { FC } from 'react'
import styles  from './RateBlock.module.scss'

interface RateBlockProps {
    id: number;
    src: string;
    name: string;
    placeFrom: string;
    description: string;
}

const RateBlock:FC<RateBlockProps> = ({id, src, name, placeFrom, description}) => {
    return (
        <article key={id} className={styles.RateBlock}>
            <article className={styles.userInfo}>
                <img className={styles.userAvatar} src={src} alt="" />
                <div className={styles.userInformation}>
                    <h4 className={styles.firstName}>{name}</h4>
                    <p className={styles.placeFrom}>{placeFrom}</p>
                </div>
            </article>
            <p className={styles.description}>{description}</p>
        </article>
    )
}

export default RateBlock