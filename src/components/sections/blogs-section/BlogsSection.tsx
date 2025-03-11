import styles from "./BlogsSection.module.scss";

import blog1 from '../../../assets/images/blogs/blog1.png'
import blog2 from '../../../assets/images/blogs/blog2.png'
import blog3 from '../../../assets/images/blogs/blog3.png'
import blog4 from '../../../assets/images/blogs/blog4.png'
import blog5 from '../../../assets/images/blogs/blog5.png'
import blog6 from '../../../assets/images/blogs/blog6.png'
import BlogCard from "../../shared/blog-card/BlogCard";


const BlogsSection = () => {
  
    const data = [
        {
            id: 1,
            title: 'Residential Interior Designer In New York, USA',
            date: 'November 23, 2021',
            alert: 'Kitchen Design',
            src: blog1
        },
        {
            id: 2,
            title: 'How To Choose The Best Wall Art & Decor House?',
            date: 'November 23, 2021',
            alert: 'Living Room',
            src: blog2
        },
        {
            id: 3,
            title: 'Tips To Increase The Interior Value Of Your House',
            date: 'November 23, 2021',
            alert: 'Minimalist Interior',
            src: blog3
        },
        {
            id: 4,
            title: 'Best Solution For Any Office & Business Interior',
            date: 'November 23, 2021',
            alert: 'Kitchen Design',
            src: blog4
        },
        {
            id: 5,
            title: 'Get Solution For Building Construction Work',
            date: 'November 23, 2021',
            alert: 'Living Room',
            src: blog5
        },
        {
            id: 6,
            title: 'Attain The Best Finish For The Kitchen Cabinets',
            date: 'November 23, 2021',
            alert: 'Minimalist Interior',
            src: blog6
        },
        
    ]

    return (
    <section className={styles.BlogsSection}>
      <div className={styles.container}>
        <h3 className={styles.title}>Recent Blogs</h3>
        <p className={styles.subtitle}>Get updates about our latest trends and techniques used in interior design project works.</p>
        <article className={styles.BlogsContainer}>
            {data.map((blog) => {
                return <BlogCard id={blog.id} title={blog.title} date={blog.date} alert={blog.alert} src={blog.src} key={blog.id} />
            })}
        </article>
      </div>
    </section>
  );
};

export default  BlogsSection
