import styles from './monitoring.module.css'
import { InfoWindow, Marker } from "@react-google-maps/api";
import trashbox from '../../assets/trashbox.png'
import trashboxGrayed from '../../assets/trashbox-grayed.png'
import { useState } from 'react';

export default function CustomMarker({ selected, handleClick, id, radius, begin, end, name, description, clusterer, lat, lng, i }: { selected: any, report: any, handleClick: any, id: number, radius: number, begin: string, end: string, name: string, description: string, clusterer: any, lat: number, lng: number, i: number }) {
    const [showInfo, setShowInfo] = useState(false)
    let active = end !== null ? new Date() < new Date(end) : true
    return (
        <>
            {(showInfo || selected?.id === id) &&
                <InfoWindow position={{ lat: lat, lng: lng }} options={{ pixelOffset: new google.maps.Size(0, -30) }}>
                    <div className={styles.info_baloon}>
                        <div>
                            <div className={styles.point_name}>
                                <img src={active ? trashbox : trashboxGrayed} />
                                <div className={styles.point_status}>
                                    <span>{name}</span>
                                    <span>{active ? <div className={styles.active}>Активна</div> : <div className={styles.inactive}>Неактивна</div>}</span>
                                </div>
                            </div>
                            <div className={styles.splitter}></div>
                            <div className={styles.point_address}>
                                <span>Адрес:</span>  <span>{description}</span>
                            </div>
                            <div className={styles.splitter}></div>
                            <div className={styles.radius}>
                                <span>Радиус:</span>  <span>{radius}м</span>
                            </div>
                            <div className={styles.splitter}></div>
                            <div className={styles.begin}>
                                <span>Дата начала расчетов:</span>  <span>{begin.split('T')[0].split('-').reverse().join('.')}</span>
                            </div>
                            {end &&
                                <>
                                    <div className={styles.splitter}></div>
                                    <div className={styles.begin}>
                                        <span>Дата окончания расчетов:</span>  <span>{end.split('T')[0].split('-').reverse().join('.')}</span>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </InfoWindow>}
            <Marker
                onMouseOver={() => setShowInfo(true)}
                onMouseOut={() => setShowInfo(false)}
                onClick={() => { setShowInfo(false); handleClick(id) }}
                icon={{ url: active ? trashbox : trashboxGrayed, scaledSize: new google.maps.Size(27, 30), }}
                key={lng + lat + i} position={{ lat: lat, lng: lng }} clusterer={clusterer} />
        </>
    )
}
