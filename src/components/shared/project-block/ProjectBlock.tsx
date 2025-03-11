import { FC } from "react";

import styles from './ProjectBlock.module.scss'
import CirculeButton from "../circule-button/CirculeButton";

interface ProjectBlockProps {
  id: number;
  title: string;
  subtitle: string;
  src: string;
}

const ProjectBlock:FC<ProjectBlockProps> = ({id, title, subtitle, src}) => {
  return (
  <article className={styles.ProjectBlock} key={id}>
    <img className={styles.image} src={src} alt={src} />
    <article className={styles.info}>
        <article className={styles.infoText}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.subtitle}>{subtitle}</p>
        </article>
        <CirculeButton />
    </article>
  </article>
  );
};

export default ProjectBlock;
