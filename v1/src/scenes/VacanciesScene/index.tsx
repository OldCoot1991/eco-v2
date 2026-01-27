import React from "react";
import styles from "../VacanciesScene/vakansii.module.css";
import vakansii from "../VacanciesScene/vakansii";

interface VacanciesSceneState {
    openedKey: number;
    containerClass: string;
    tel: string;
}

// О компании: Вакансии
class VacanciesScene extends React.Component<any, VacanciesSceneState> {
    constructor(props: any) {
        super(props);
        this.state = {
            openedKey: 0,
            containerClass: styles.container_info,
            tel: "",
        };
    }

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.zagolovok}>Вакансии</h1>
                <div className={styles.wrapper}>
                    <div>
                        {vakansii.map((job, i) => (
                            <div className={styles.card}>
                                <div className={styles.top_text}>
                                    <h3 className={styles.zagolovok_text}>
                                        {job.text}
                                    </h3>
                                    <p className={styles.texti}>
                                        {job.paragraph}
                                    </p>
                                </div>
                                <div
                                    className={this.state.openedKey === i &&
                                        this.state.containerClass ===
                                        styles.container_info
                                        ? styles.center_text_active
                                        : styles.center_text}
                                    key={i}
                                    onClick={(event) => {
                                        this.setState({
                                            openedKey: i,
                                            containerClass:
                                                this.state.openedKey === i &&
                                                    this.state.containerClass ===
                                                    styles.container_info
                                                    ? styles.container_info_active
                                                    : styles.container_info,
                                        });
                                    }}
                                >
                                    <p className={styles.texts}>
                                        Подробнее по указанному номеру телефона
                                        {this.state.openedKey === i && this.state.containerClass === styles.container_info ? "▼" : "▲"}
                                    </p>
                                </div>
                                <div
                                    className={
                                        this.state.openedKey === i &&
                                            this.state.containerClass ===
                                            styles.container_info
                                            ? styles.container_info_active
                                            : styles.container_info
                                    }
                                    key={i}
                                >
                                    <p className={styles.text}>
                                        Обращаться по телефону:
                                    </p>
                                    <div className={styles.text_info}>
                                        <p className={styles.text}>
                                        {job.tel}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className={styles.info}>
                            <p className={styles.zagolovoks}>
                                Справки по телефонам:
                            </p>
                            <div className={styles.text_info_container}>
                                <a href="tel:+8 928 707 29 72" className={styles.text_cont}>8 (928) 707-29-72</a>
                                {/* <p className={styles.text_conts}>E-mail:</p>
                                <a href="mailto:abon@ecologistika.com" className={styles.text_cont}>abon@ecologistika.com</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VacanciesScene;
