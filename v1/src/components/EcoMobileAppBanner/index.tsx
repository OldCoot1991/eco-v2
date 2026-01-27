import styles from './ecomobileappbanner.module.css'
import EcoMobileAppBannerLogo from './eco_mobile_app.png'

const EcoMobileAppBanner = () => {
    return (
        <div className={styles.container}>
            <a href="https://ecologistika.page.link/app" target="_blank" rel="noreferrer">
                <img alt='Скачать мобильное приложение' className={styles.ecomobileappbanner} src={EcoMobileAppBannerLogo}></img>
            </a>
        </div>
    )
}

export default EcoMobileAppBanner;
