import { GoogleMap, useJsApiLoader, MarkerClusterer, Marker, Polyline, useGoogleMap, Autocomplete } from '@react-google-maps/api';
import styles from './monitoring.module.css'
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import m1 from '../../assets/m1.png'
import m2 from '../../assets/m2.png'
import m3 from '../../assets/m3.png'
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import CustomMarker from './CustomMarker';
import Report from './Report';
import ListItem from './ListItem';
import ResizePanel from '../../components/ResizePanel';
import CustomPoly from './CustomPoly';
dotenv.config()


export const DateContext = createContext<any>({})
// Мониторинг контейнерных площадок
function MonitoringScene() {
    const [points, setPoints] = useState<any>([])
    const [sideBarPoints, setSideBarPoints] = useState<any>([])
    const [map, setMap] = useState<any>()
    const [autocomplete, setAutocomplete] = useState<any>()

    const [center, setCenter] = useState({ lat: 43.49, lng: 43.60 })
    const [zoom, setZoom] = useState(13)
    const [selectedPoint, setSelectedPoint] = useState<any>()

    const [range, setRange] = useState(['', ''])
    const [report, setReport] = useState<any>()
    const [showReportWindow, setShowReportWindow] = useState(false);

    const [loadInfo, setLoadInfo] = useState('Получаем список контейнерных площадок...')

    const getPoints = async () => {
        let { data } = await axios.get('/api/monitoring/getGeofences')
        let ids = data.map((geofence: any) => geofence.id)

        setLoadInfo('Отрисовываем точки на карте...')

        let points = await axios.post('/api/monitoring/getWkt', ids)
        let wktMap = new Map();
        points.data.map((point: any) => {
            wktMap.set(point.wkt.id, JSON.parse(point.wkt.wkt))
        })

        let list = data.map((geofence: any, i: number) => {
            let wkt = wktMap.get(geofence.id)
            if (wkt.type === 'Point' || wkt.type === 'LineString') {
                return {
                    id: geofence.id,
                    name: geofence.name,
                    description: geofence.description,
                    radius: geofence.radius,
                    type: wkt.type,
                    coordinates: wkt.coordinates,
                    begin: geofence.beginCalc,
                    end: geofence.endCalc,
                }
            }
        }).filter((geofence: any) => geofence !== undefined)
        setPoints(list)
        setSideBarPoints(list)
    }

    useEffect(() => {
        getPoints()
    }, [])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
        libraries: ['places']
    })

    const handlePointClick = (id: string) => {
        let point: any = points.find((p: any) => p.id === id)
        let center;
        let zoom;
        if (point) {
            if (point.type === 'LineString') {
                center = { lat: point.coordinates[Math.floor(point.coordinates.length / 2)][1], lng: point.coordinates[Math.floor(point.coordinates.length / 2)][0] }
                zoom = 16;
            } else {
                center = { lat: point.coordinates[1], lng: point.coordinates[0] }
                zoom = 20;
            }
            setCenter(center)
            setZoom(zoom)
            setShowReportWindow(true)
            setSelectedPoint(point)
            if (point !== selectedPoint) {
                setReport(undefined)
            }
        }
    }

    const handleGetReport = () => {
        if (range.every(date => date !== '')) {
            setReport('loading')
            let data = {
                ids: [selectedPoint.id],
                date: {
                    from: range[0],
                    to: range[1]
                }
            }
            axios.post('/api/monitoring/reports/geofences', data
            ).then(res => {
                setReport(res.data.result[0].rows)
            }).catch(err => {
                if (err.response.status === 400) {
                    setReport(400)
                } else {
                    setReport(500)
                }
            })
        }
    }
    let timeoutID: any = null;
    const handleSearch = (e: any) => {
        timeoutID && clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            let result = points.filter((point: any) => {
                let match = point.name.match(new RegExp(`${e.target.value}`, 'gi'))
                return match && !!match.length
            })
            setSideBarPoints(result);
        }, 1000)
    }

    return (
        !points.length ?
            <>
                <h1 className={styles.title}>Мониторинг контейнерных площадок</h1>
                <div className={styles.loader} />
                <p className={styles.load_info}>{loadInfo}</p>
            </>
            :
            <>
                <DateContext.Provider value={{ set: setRange, get: range, report: report, point: selectedPoint, getReport: handleGetReport }}>
                    <h1 className={styles.title}>Мониторинг контейнерных площадок</h1>
                    <div className={styles.searchbar}>
                        <input onChange={handleSearch} type="text" placeholder="Поиск по контейнерным площадкам" />
                    </div>
                    <div className={styles.map}>
                        <ResizePanel defaultSize={600} direction='s'>
                            <div className={styles.flex_row}>
                                <ResizePanel defaultSize={300} direction='e'>
                                    <div className={styles.sidebar}>
                                        <AutoSizer>
                                            {({ height, width }) => (
                                                <List
                                                    height={height}
                                                    width={width}
                                                    itemSize={30}
                                                    itemCount={sideBarPoints.length}
                                                    itemData={{ points: sideBarPoints, handle: handlePointClick }}
                                                >
                                                    {ListItem}
                                                </List>
                                            )}
                                        </AutoSizer>
                                    </div>
                                </ResizePanel>
                                <div className={styles.gmap}>
                                    {isLoaded && <GoogleMap
                                        mapContainerStyle={{
                                            width: '100%', height: '100%', border: '1px solid #89c228'
                                        }}
                                        center={center}
                                        zoom={zoom}
                                        onZoomChanged={() => setZoom(map?.getZoom() || 13)}
                                        onLoad={(map) => setMap(map)}
                                        options={{
                                            scrollwheel: true, styles: [
                                                {
                                                    "featureType": "poi",
                                                    "elementType": "labels.icon",
                                                    "stylers": [
                                                        {
                                                            "visibility": "off"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }}
                                    >
                                        <Autocomplete
                                            onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                                            onPlaceChanged={() => {
                                                let place = autocomplete.getPlace()
                                                if (place.geometry) {
                                                    map.panTo({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() })
                                                    map.setZoom(18)
                                                }
                                            }}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Поиск по адресу"
                                                className={styles.searchbar}
                                                style={{
                                                    boxSizing: `border-box`,
                                                    border: `1px solid transparent`,
                                                    width: `240px`,
                                                    height: `32px`,
                                                    padding: `0 12px`,
                                                    borderRadius: `3px`,
                                                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                                    fontSize: `14px`,
                                                    outline: `none`,
                                                    textOverflow: `ellipses`,
                                                    position: "absolute",
                                                    left: "50%",
                                                    marginLeft: "-120px"
                                                }}
                                            />
                                        </Autocomplete>
                                        <MarkerClusterer
                                            styles={[{ textColor: 'black', url: m1, height: 40, width: 40 }, { textColor: 'black', height: 40, url: m2, width: 40 }, { textColor: 'black', height: 40, url: m3, width: 40 }]}
                                        >
                                            {(clusterer) =>
                                                points.map((location: any, i: any) => {
                                                    if (location.type === 'Point') {
                                                        let lat = location.coordinates[1]
                                                        let lng = location.coordinates[0]
                                                        return (
                                                            <>
                                                                <CustomMarker
                                                                    selected={selectedPoint}
                                                                    report={report}
                                                                    handleClick={handlePointClick}
                                                                    id={location.id}
                                                                    name={location.name}
                                                                    description={location.description}
                                                                    radius={location.radius}
                                                                    begin={location.begin}
                                                                    end={location.end}
                                                                    clusterer={clusterer}
                                                                    lat={lat} lng={lng} i={i} />
                                                            </>
                                                        )
                                                    } else if (location.type === 'LineString') {
                                                        let latlng = location.coordinates.map((loc: any) => { return { lat: loc[1], lng: loc[0] } })
                                                        return <CustomPoly
                                                            onClick={() => handlePointClick(location.id)}
                                                            options={{ strokeColor: selectedPoint?.id === location.id ? '#04ff00' : '#537C52', strokeWeight: 8 }}
                                                            key={i + location.type}
                                                            path={latlng}
                                                            id={location.id}
                                                            lat={latlng}
                                                            lng={latlng}
                                                            name={location.name}
                                                            end={location.end}
                                                            description={location.description}
                                                            begin={location.begin}
                                                        />
                                                    } else return
                                                }
                                                )
                                            }
                                        </MarkerClusterer>
                                    </GoogleMap>}
                                </div>
                            </div>
                        </ResizePanel>
                        {showReportWindow && (
                            <div className={styles.report_bottom_bar}>
                                <span onClick={() => setShowReportWindow(false)} className={styles.cross_button}>X</span>
                                <span> {selectedPoint && selectedPoint.description} </span>
                                <Report />
                            </div>
                        )}
                    </div>
                </DateContext.Provider>
            </>)
}

export default React.memo(MonitoringScene);
