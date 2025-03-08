import RateBlock from '../../shared/rate-block/RateBlock'
import styles from './RateSection.module.scss'
import user1 from '../../../assets/images/avatars/user1.png'
import user2 from '../../../assets/images/avatars/user2.png'
import user3 from '../../../assets/images/avatars/user3.png'

const RateSection = () => {

    const data = [
        {
            id: 1,
            src: user1,
            name: 'Lisa Clairton',
            placeFrom: 'New York, USA',
            description: 'We selected Interno interior because of rigorous design background & education.'
        },
        {
            id: 2,
            src: user2,
            name: 'David Knight',
            placeFrom: 'Sydney, Australia',
            description: 'The team exceeded our expectations and emerged as leaders of our project’s.'
        },
        {
            id: 3,
            src: user3,
            name: 'Lisa Clairton',
            placeFrom: 'Paris, France',
            description: 'They balanced the architectural vision and the project realities beautifully.'
        },

    ]

    return (
        <section className={styles.RateSection}>
            <div className={styles.container}>
                <h3 className={styles.title}>What the People Thinks About Interno</h3>
                <section className={styles.rateContainer}>
                    {data.map((rate) =>
                        <RateBlock
                            id={rate.id}
                            src={rate.src}
                            name={rate.name}
                            placeFrom={rate.placeFrom}
                            description={rate.description}
                        />
                    )}
                </section>
            </div>
        </section>
    )
}

export default RateSection