import styles from './DarkButton.module.scss'
import arrowRight from '../../../assets/icons/arrowRight.svg'
import { FC } from 'react';

interface DarkButtonProps {
    title: string
}

const DarkButton:FC<DarkButtonProps> = ({title}) => {
    return (
        <button className={styles.DarkButton}>
            <span>{title}</span>
            <img src={arrowRight} alt="Get Started" />
        </button>
    )
}

export default DarkButton;