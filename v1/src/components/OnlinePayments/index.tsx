import axios from "axios";
import { FormEvent, useState } from "react";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import styles from "./online-payments.module.css";

export default function OnlinePayments() {
    const [phone, setPhone] = useState("");

    const handleChange = (values: NumberFormatValues) => {
        setPhone(values.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (phone.length === 10) {
            // Узнаём полностью ли введен номер
            axios
                .post("/api/sendapp", { number: phone })
                .then((res) => {
                    res.status === 200 && alert(res.data.message);
                })
                .catch((err) => {
                    let errMsg = err.response.data.message;
                    if (errMsg) {
                        alert(errMsg);
                    } else {
                        alert("Неизвестная ошибка, повторите позднее");
                    }
                });
        } else {
            alert("Введите номер телефона полностью");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                    <p className={styles.onlinepayments_title}>
                        Совершайте онлайн платежи через мобильное приложение и
                        получайте кэшбэк
                    </p>
                    <p className={styles.onlinepayments_description}>
                        Введите свой номер телефона и получите бесплатно ссылку
                        для скачивания мобильного приложения
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.onlinepayments_form}
                        id="sms-form"
                    >
                        <NumberFormat
                            format="+7 (###) ###-####"
                            name="number"
                            className={styles.onlinepayments_input}
                            placeholder="Введите номер телефона"
                            onValueChange={handleChange}
                        />
                        <button
                            type="submit"
                            className={styles.onlinepayments_button}
                        >
                            Отправить ссылку
                        </button>
                    </form>
            </div>

            <div className={styles.onlinepayments_2}>
                <p className={styles.onlinepayments_title_2}>
                    Совершайте онлайн платежи через мобильное приложение и
                    получайте кэшбэк
                </p>
                <p className={styles.onlinepayments_description_2}>
                    Введите свой номер телефона и получите бесплатно ссылку для
                    скачивания мобильного приложения
                </p>
                <form
                    onSubmit={handleSubmit}
                    className={styles.onlinepayments_form_2}
                    id="sms-form"
                >
                    <NumberFormat
                        format="+7 (###) ###-####"
                        name="number"
                        className={styles.onlinepayments_input_2}
                        placeholder="Введите номер телефона"
                        onValueChange={handleChange}
                    />
                    <button
                        type="submit"
                        className={styles.onlinepayments_button_2}
                    >
                        Отправить ссылку
                    </button>
                </form>
            </div>
        </div>
    );
}
