import styles from './HeroSection.module.scss';
import arrowRight from '../../../assets/icons/arrowRight.svg';

const HeroSection = () => {

    return (
        <section className={styles.HeroSection}>
            <div className={styles.container}>
                <h1>Let's Create Your Dream Interior</h1>
                <p>The world needs innovators and problem solvers who turn</p>
                <p>challenges into greater opportunities.</p>
                <button>
                    <span>Get Started</span>
                    <img src={arrowRight} alt="Get Started" />
                </button>
            </div>
        </section>
    );
};

export default HeroSection;