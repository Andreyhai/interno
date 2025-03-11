import arrrowRight2 from '../../../assets/icons/arrowRight2.svg'
import DarkButton from "../../shared/dark-button/DarkButton"
import styles from './FeedbackSection.module.scss'

const FeedbackSection = () => {
    return (
        <section className={styles.FeedbackSection}>
            <div className={styles.container}>
                <h3 className={styles.title}>Wanna join the interno?</h3>
                <p className={styles.subtitle}>Contact Us & Get a Free Consultation</p>
                <DarkButton title="Connect With us" src={arrrowRight2} color='gold' />
            </div>
        </section>
    )
}

export default FeedbackSection