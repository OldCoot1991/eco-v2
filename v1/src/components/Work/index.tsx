import React from 'react';
import styles from '../Work/work.module.css';
import cards from './arrowork';
import Button from '../Button/index'



const Work = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Как мы работаем</h1>
            <div className={styles.wrapper}>
                <div className={styles.main_content}>
                    {cards.map(card => (
                        <div className={styles.card}>
                            <div className={styles.img_container}>
                                <img src={card.href} className={styles.img} alt="" />
                                <img src={card.href2} className={styles.image} alt="" />
                            </div>
                            <div className={styles.container_text}>
                                <h1 className={styles.text_number}>{card.number}</h1>
                                <h2 className={styles.zagolovok}>{card.zagolovok}</h2>
                                <p className={styles.paragraph}>{card.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.container_button}>
            <Button href="/company/about" text="О компании"></Button>
            </div>
        </div>
    )
};

export default Work;
