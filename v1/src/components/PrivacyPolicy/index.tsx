import { useCookies } from 'react-cookie';
import styles from '../PrivacyPolicy/privacypolicy.module.css'
import privacy_policy from '../../assets/docs/privacy_policy.pdf'

const PrivacyPolicy = () => {
    const [cookies, setCookie] = useCookies(['policy']);
    const handleAcceptCookie = () => {
        setCookie("policy", new Date().getTime(), {
            maxAge: 31536000
        })
    }
    return (
        <div className={`${cookies.policy ? styles.customCookie__hidden : styles.customCookie}`}>
            <div className={styles.customCookie__content}>
                <div className={styles.customCookie__text}>Мы применяем небольшие фрагменты данных для повышения вашего удобства пользования нашим сайтом. Нажимая «Принять», вы соглашаетесь с ограниченным применением небольших фрагментов данных в аналитических целях. Более подробная информация изложена в нашей Политике конфиденциальности</div>
                <div className={styles.customCookie__buttons}>
                    <button onClick={handleAcceptCookie} id="customCookieAccept" className={`${styles.customCookie__button} ${styles.customCookie__button__accept}`} >Принять</button>
                    <a href={privacy_policy} id="customCookiePolicy" target="_blank" className={`${styles.customCookie__button} ${styles.customCookie__button__policy}`}>Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
