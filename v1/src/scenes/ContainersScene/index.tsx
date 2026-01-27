import React from 'react';
import styles from './container.module.css'
import arrows from './container'
import EcoMobileAppBanner from '../../components/EcoMobileAppBanner';

// О компании: Контейнеры
class ContainersScene extends React.Component {
    render() {
        return(
        <div>
            <div className={styles.wrapper}>
                <h1 className={styles.texts}>Контейнер</h1>
                <div className={styles.container}>
                    {arrows.map((arrow) => (
                        <div className={styles.container_card}>
                            <div className={styles.container_text}>
                                <h2 className={styles.zagolovok_card}>
                                    <a href="#" className={styles.link}>{arrow.name}</a>
                                </h2>
                                <p className={styles.text}>{arrow.number}</p>
                            </div>
                            <div className={styles.container_img}>
                                <img className={styles.img} src={arrow.img}></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <EcoMobileAppBanner />
        </div>
        )
    }
}

export default ContainersScene;
