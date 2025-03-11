import { FC } from "react";
import styles from "./BlogCard.module.scss";
import CirculeButton from "../circule-button/CirculeButton";

interface BlogCardProps {
  id: number;
  title: string;
  date: string;
  alert: string;
  src: string;
}

const BlogCard:FC<BlogCardProps> = ({id, title, date, alert, src}) => {
  return (
    <article className={styles.BlogCard} key={id}>
      <div className={styles.image} style={{backgroundImage: `url(${src})`}}>
        <span className={styles.alert}>{alert}</span>
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.infoContainer}>
          <p className={styles.date}>{date}</p>
          <CirculeButton />
        </div>
      </div>
    </article>
  );
};

export default BlogCard