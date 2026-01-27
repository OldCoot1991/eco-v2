import React from 'react';
import styles from '../Button/button.module.css'

export interface ButtonProps {
    text: string;
    click?: () => void;
    textColor?: string;
    background?: string;
    href?: string;
    showArrow?: boolean;
}

const Button = (props: ButtonProps) => {
    return (
        <a
            className={styles.button}
            href={props.href ? props.href : '#'}
            style={{
                color: props.textColor ? props.textColor : '',
                background: props.background ? props.background : ''
            }}
            onClick={props.click}>{props.text}
            {props.showArrow && <img />}
        </a>
    )
};

export default Button;
