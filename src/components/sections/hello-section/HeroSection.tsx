import styles from './HeroSection.module.scss';
import arrowRight from '../../../assets/icons/arrowRight.svg';
import DarkButton from '../../shared/dark-button/DarkButton';

const HeroSection = () => {

    return (
        <section className={styles.HeroSection}>
            <div className={styles.container}>
                <h1>Let's Create Your Dream Interior</h1>
                <p>The world needs innovators and problem solvers who turn challenges into greater opportunities.</p>
                <DarkButton title={'Get Started'} />
            </div>
        </section>
    );
};

export default HeroSection;