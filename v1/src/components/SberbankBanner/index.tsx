import styles from './sberbankbanner.module.css'
import SberbankBannerLogo from './sb_online_rus_rgb.png'

const SberbankBanner = () => {
    return (
        <div className={styles.container}>
            <a href="https://sberbank.com/sms/ppinv?reqId=919771641602" target="_blank" rel="noreferrer">
                <img alt='Сбербанк' className={styles.sberbankbanner} src={SberbankBannerLogo}></img>
            </a>
        </div>
    )
}

export default SberbankBanner;
