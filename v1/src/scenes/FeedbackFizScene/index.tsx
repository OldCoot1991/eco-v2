import axios from 'axios';
import { FormEvent, useState } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import styles from './feedbackfizscence.module.css'
import EcoMobileAppBanner from '../../components/EcoMobileAppBanner';

// Физлица: Обратная связь
function FeedbackFizScene() {
    const [phone, setPhone] = useState('')
    const handleChange = (values: NumberFormatValues) => {
        setPhone(values.value);
    }

    const [state, setState] = useState({
        type: 'fiz',
        fullName: '', // Фамилия, имя
        phoneNumber: '', // Номер телефона
        message: '', // Сообщение
        email: '', // E-mail
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (phone.length === 10) { // Узнаём полностью ли введен номер
            axios.post('/api/application', state).then(res => {
                res.status === 200 && alert(res.data.message)
            }).catch(err => alert("Произошла ошибка, повторите позднее"))
        } else {
            alert("Введите номер телефона полностью")
        }

    }
    return (
        <>
            <div>
                <h1 className={styles.title}>Задать вопрос</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setState({ ...state, fullName: e.target.value })} className={styles.input} placeholder="Ф. И. О" />
                    <input onChange={(e) => setState({ ...state, email: e.target.value })} className={styles.input} type="email" name="email" id="" placeholder="e-mail*" required />
                    <NumberFormat
                        onValueChange={handleChange}
                        onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
                        format="+7 (###) ###-####"
                        name="number" className={styles.input} placeholder="Номер телефона*"
                        required
                    />
                    <textarea
                        onChange={(e) => setState({ ...state, message: e.target.value })} className={styles.input}
                        name="desc" id="" cols={30} rows={10} placeholder="Введите текст*" />
                    <button className={styles.button} type="submit">Отправить</button>
                </form>
            </div>
            <EcoMobileAppBanner />
        </>
    )
}

export default FeedbackFizScene;
