import { FC } from "react";
import styles from "./ServiceBlock.module.scss";
import arrowRight from "../../../assets/icons/arrowRight.svg";

interface ServiceBlockProps {
  title: string;
  subtitle: string;
}

const ServiceBlock: FC<ServiceBlockProps> = ({ title, subtitle }) => {
  return (
    <article className={styles.ServiceBlock}>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <button className={styles.button}>
        <span className={styles.buttonText}>View More</span>
        <img className={styles.buttonIcon} src={arrowRight} alt="Узнать больше" />
      </button>
    </article>
  );
};

export default ServiceBlock;
