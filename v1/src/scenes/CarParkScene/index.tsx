import React from "react";
import styles from "./park.module.css";
import carpark from "./carpark";
import EcoMobileAppBanner from "../../components/EcoMobileAppBanner";

// О компании: Автопарк
class CarParkScene extends React.Component {
    render() {
        return (
            <div>
                 <div className={styles.wrapper}>
                <h1 className={styles.texts}>Автопарк</h1>
                <div className={styles.container}>
                    {carpark.map((car) => (
                        <div className={styles.container_card}>
                            <div className={styles.text}>
                                <h2 className={styles.zagolovok_card}>
                                    {car.name}
                                </h2>
                            </div>
                            <div className={styles.container_img}>
                                <img className={styles.img} src={car.img}></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                <EcoMobileAppBanner />
            </div>
        );
    }
}

export default CarParkScene;
