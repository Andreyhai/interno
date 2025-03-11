import styles from './CirculeButton.module.scss'
import arrowButton from '../../../assets/icons/buttonArrow.svg'

const CirculeButton = () => {
    return (
        <button className={styles.button}>
            <img src={arrowButton} alt={arrowButton} />
        </button>
    )
}

export default CirculeButton