import background1 from '../../../assets/images/prrojects/project1.png'
import background2 from '../../../assets/images/prrojects/project2.png'
import background3 from '../../../assets/images/prrojects/project3.png'
import background4 from '../../../assets/images/prrojects/project4.png'
import ProjectBlock from '../../shared/project-block/ProjectBlock'

import styles from './ProjectsSection.module.scss'


const ProjectsSection = () => {

    const data = [
        {
            id: 1,
            title: 'Winery Dry Creek Building',
            subtitle: 'Art Modern',
            src: background1
        },
        {
            id: 2,
            title: 'Creative Workplace Design',
            subtitle: 'Minimalist',
            src: background2
        },
        {
            id: 3,
            title: 'Bedroom Interior Pot Work',
            subtitle: 'Modern',
            src: background3
        },
        {
            id: 4,
            title: 'Light Ambience Sepia Design',
            subtitle: 'Scandinavian',
            src: background4
        },
        
    ]

    return (
        <section className={styles.ProjectsSection}>
            <div className={styles.container}>
                <h3 className={styles.title}>Recent Projects</h3>
                <p className={styles.subtitle}>With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier.</p>
                <article className={styles.ProjectsContainer}>
                    {data.map((project) => {
                        return (
                            <ProjectBlock id={project.id} title={project.title} subtitle={project.subtitle} src={project.src} key={project.id} />
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default ProjectsSection