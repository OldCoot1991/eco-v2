import React from 'react';
import Doverie from '../../components/Doverie';
import {image } from '../../components/Doverie/doverie';
import styles from '../../scenes/OurClientsScene/ourclient.module.css';
import EcoMobileAppBanner from '../../components/EcoMobileAppBanner';

// О компании: Наши клиенты
class OurClientsScene extends React.Component {
    render() {
        return <div className={styles.container}>
            <h1 className={styles.zagolovok}>Наши клиенты</h1>
            <Doverie doveries={image} hideButton={true}/>
            <EcoMobileAppBanner />
        </div>;
    }
}

export default OurClientsScene;
