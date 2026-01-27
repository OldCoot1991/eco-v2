import React from 'react';
import Uslugi from '../../components/Uslugi';
import styles from '../../scenes/MainFizScene/fiz.module.css'
import Work from '../../components/Work/index';
import News from '../../components/News/index'
import WasteCard from '../../components/WasteCard/index'
import Banner from '../../components/Banner/index'
import photo from '../../components/Banner/img/photo.jpg';
import bannerImg from '../../components/Banner/img/bannerimg.png'
import { GosuslugiFeedback } from '../../components/GosuslugiFeedback';
import EcoMobileAppBanner from '../../components/EcoMobileAppBanner';
import SberbankBanner from '../../components/SberbankBanner';
import TBankBanner from '../../components/TBankBanner';


const ColorTitle = {
    color: "white", 
}

const ColorText = {
    color: "white",
    width: "310px" 
}

// Физическим лицам: Главная
class MainFizScene extends React.Component {
    render() {
        return (
            <div>
                <Banner
                    textButton="Заказать вывоз отходов"
                    background={photo}
                    textZagolovok="Чистота республики в наших общих руках. Внеси свой вклад в сохранение экологии"
                    textParagraf="Региональный оператор по обращению с ТКО по Кабардино-Балкарской Республике"
                    backgrounds={bannerImg}
                    href="/request-tko"  
                    styleText={styles.color_title} 
                    styleText2={styles.color_text}/>
                <div className={styles.container}>
                    <Uslugi />
                    <WasteCard />
                    <Work />
                    <GosuslugiFeedback />
                    <div className={styles.onli}>
                        <EcoMobileAppBanner />
                        <div className={styles.bankscontainer}>
                            <SberbankBanner />
                            <TBankBanner />
                        </div>
                    </div>
                    <div className={styles.news_containers}>
                        <News />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainFizScene;
