import React from 'react';
import CompanyNumbers from '../../components/CompanyNumbers';
import UslugiBiz from '../../components/UslugiBiz';
import Doverie from '../../components/Doverie';
import Work from '../../components/Work';
import News from '../../components/News';
import Banner from '../../components/Banner';
import jurbanner from '../../components/Banner/img/jurbanner.webp';
import bannerImg from '../../components/Banner/img/bannerimg.png';
import {images} from '../../components/Doverie/doverie';
import EcoMobileAppBanner from '../../components/EcoMobileAppBanner';

// Бизнесу: Главная
class MainJurScene extends React.Component {
    render() {
        return (
            <div>
                <Banner textButton={"Заявка на заключение договара"}
                    background={jurbanner}
                    textZagolovok="Чистота республики в наших общих руках. Внеси свой вклад в сохранение экологии"
                    textParagraf="Региональный оператор по обращению с ТКО по Кабардино-Балкарской Республике"
                    backgrounds={bannerImg}
                    href='/jur/contract' />
                <UslugiBiz />
                <CompanyNumbers />
                <Doverie doveries={images}/>
                <Work />
                <EcoMobileAppBanner />
                <News />
            </div>
        )
    }
}

export default MainJurScene;
