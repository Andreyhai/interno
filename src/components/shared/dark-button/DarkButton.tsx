import styles from './DarkButton.module.scss'
import { FC } from 'react';

interface DarkButtonProps {
    title: string,
    src: string,
    color: string
}

const DarkButton:FC<DarkButtonProps> = ({title, src, color}) => {
    return (
        <button className={styles.DarkButton} style={{background: color === 'black' ? '#292F36' : '#cda274'}}>
            <span>{title}</span>
            <img src={src} alt="Get Started" />
        </button>
    )
}

export default DarkButton;