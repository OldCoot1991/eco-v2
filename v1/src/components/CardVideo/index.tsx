import { VideoCards } from "./cardvideo";
import styles from "./video.module.css";
import EcoMobileAppBanner from "../EcoMobileAppBanner";

const CardVideo = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text__header}>РСО для детей</h1>
            {VideoCards.map((videocard, i) => (
                <div className={styles.card}>
                    <div className={styles.container_text}>
                        <h2 className={styles.zagolovok_card}>
                            <a className={styles.link}>{videocard.text}</a>
                        </h2>
                    </div>
                    <iframe
                        width="100%"
                        height="350px"
                        src={videocard.src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
            <EcoMobileAppBanner />
        </div>
    );
};

export default CardVideo;
