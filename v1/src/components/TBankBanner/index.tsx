import styles from './tbankbanner.module.css'
import TBankBannerLogo from './tbank_logo.png'

const TBankBanner = () => {
    return (
        <div className={styles.container}>
            <a href="https://www.tbank.ru" target="_blank" rel="noreferrer">
                <img alt='Т-Банк' className={styles.tbankbanner} src={TBankBannerLogo}></img>
            </a>
        </div>
    )
}

export default TBankBanner;
