import DarkButton from "../../shared/dark-button/DarkButton"
import phoneIcon from '../../../assets/icons/phoneIcon.svg'
import styles from './AboutSection.module.scss'

const AboutSection = () => {
    return (
        <section className={styles.AboutSection}>
            <div className={styles.container}>
                <article className={styles.infoBlock}>
                    <h3>We Tackle The Most Challenging Designs</h3>
                    <p>
                        The world needs innovators and problem
                        solvers who turn challenges into greater
                        opportunities. We have an insatiable 
                        curiosity about transformative trends 
                        challenging the status.
                    </p>
                    <article className={styles.contactBlock}>
                        <div className={styles.phoneBlock}>
                            <img src={phoneIcon} alt="image" />
                        </div>
                        <div className={styles.constactInfo}>
                            <span className={styles.phoneNumber}>012345678</span>
                            <span className={styles.phoneInfo}>Call Us Anytime</span>
                        </div>
                    </article>
                    <DarkButton title={"Get Free Estimate"} />
                </article>
                <article className={styles.imageBlock}/>
            </div>
        </section>
    )
}

export default AboutSection