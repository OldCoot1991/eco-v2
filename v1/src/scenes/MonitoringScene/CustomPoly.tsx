import { InfoWindow, Polyline } from "@react-google-maps/api"
import trashbox from '../../assets/trashbox.png'
import trashboxGrayed from '../../assets/trashbox-grayed.png'
import { useState } from "react"
import styles from './monitoring.module.css'

export default function CustomPoly({ onClick, selectedPoint, options, path, id, lat, lng, name, begin, end, description }: any) {
    const [showInfo, setShowInfo] = useState(false)
    let [position, setPosition] = useState<any>(null);
    let active = end !== null ? new Date() < new Date(end) : true
    // let position = { lat: path[Math.floor(path.length / 2)].lat, lng: path[Math.floor(path.length / 2)].lng }
    return (
        <>
            {position && (showInfo || selectedPoint?.id === id) &&
                <InfoWindow position={position} options={{ pixelOffset: new google.maps.Size(0, -15) }}>
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
            <Polyline
                onMouseOver={(e: any) => {
                    setShowInfo(true);
                    setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                }}
                onMouseOut={() => setShowInfo(false)}
                onClick={onClick}
                options={options}
                path={path}
            />
        </>
    )
}
