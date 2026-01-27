import React from "react";
import styles from "../Banner/banner.module.css";
import Button from "../Button/index";

export interface BannerProps {
    textZagolovok?: string;
    textParagraf?: string;
    textColor?: string;
    href?: string;
    textButton: string;
    background?: string;
    backgrounds?: string;
    img?: string;
    styleText?: string;
    styleText2?: string;
}

const Banner = (props: BannerProps) => {
    return (
        <div
            className={styles.banner_container}
            style={{ backgroundImage: `url(${props.background})` }}
        >
            <div className={styles.banner_content}>
                <h1
                    className={`${styles.banner_zagolovok} ${props.styleText}`}
                >
                    {props.textZagolovok}
                </h1>
                <div className={styles.conteiner_text}>
                    <div
                        className={styles.content_img}
                        style={{ backgroundImage: `url(${props.backgrounds})` }}
                    ></div>
                    <p
                        className={`${styles.banner_paragraf} ${props.styleText2}`}
                    >
                        {props.textParagraf}
                    </p>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.container_button}>
                        <Button
                            text={props.textButton}
                            textColor="white"
                            background="rgb(137, 194, 40)"
                            href={props.href}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
