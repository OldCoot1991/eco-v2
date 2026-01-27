import React from 'react';
import styles from '../QuestionsAnswers/questions.module.css';
import questions from '../QuestionsAnswers/questions'
import { useState } from 'react';


const Accordion = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i: any) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.top_zagolovok}>Вопросы - ответы</h1>
            <div className={styles.accordion}>
                {questions.map((question, i) => (
                    <div className={styles.item}>
                        <div className={styles.title} onClick={() => toggle(i)}>
                            <span className={styles.plus}>{selected == i ? '-' : '+'}</span>
                            <h2 className={styles.zagolovol}>{question.title}</h2>
                        </div>
                        <div className={selected == i ? `${styles.text} ${styles.show}` : `${styles.text}`}>{question.text()}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion;
