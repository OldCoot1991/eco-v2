import React from 'react';
import styles from './doverie.module.css';
import Button from '../Button/index'

interface DoverieProps {
    doveries: {
        src: string;
    }[];
    hideButton?: boolean;
}

const Doverie = (props: DoverieProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_img}>
                {props.doveries.map(doverie => (
                    <img src={doverie.src} className={styles.img} alt="" />
                ))}
            </div>
            <div>
                {!props.hideButton &&
            <Button text={'Другие наши клиенты'} href={'/company/clients'}/>}
            </div>
        </div>
    )
}

export default Doverie;

