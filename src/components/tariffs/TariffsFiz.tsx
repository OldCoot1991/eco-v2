import React from 'react';
import styles from './TariffsFiz.module.css';


type ZoneKey = 'zone1' | 'zone2' | 'zone3';

interface TariffPeriod {
  id: string;
  label: string;
  start: string;
  end: string;
  zones: Record<ZoneKey, number>;
}

const TARIFF_DATA: TariffPeriod[] = [
  {
    id: 'period1',
    label: 'I Полугодие',
    start: '01.01.2026',
    end: '30.09.2026',
    zones: { zone1: 356.73, zone2: 388.15, zone3: 358.43 }
  },
  {
    id: 'period2',
    label: 'II Полугодие',
    start: '01.10.2026',
    end: '31.12.2026',
    zones: { zone1: 378.33, zone2: 410.32, zone3: 383.21 }
  }
];

const ZONES_INFO: Record<ZoneKey, { label: string; description: string; iconClass: string }> = {
  zone1: { label: 'Зона 1', description: 'Северная группа районов', iconClass: styles.zoneIcon1 },
  zone2: { label: 'Зона 2', description: 'Южная группа районов', iconClass: styles.zoneIcon2 },
  zone3: { label: 'Зона 3', description: 'Западная группа районов', iconClass: styles.zoneIcon3 }
};

const NORMATIVES = [
  {
    id: 'MD',
    title: 'Многоквартирные дома',
    subtitle: 'Включая крупногабаритные отходы',
    volume: 2.83,
    volumeLabel: '2.83 м³ / год',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    headerClass: styles.paymentHeaderMD
  },
  {
    id: 'IJ',
    title: 'Частный сектор (ИЖС)',
    subtitle: 'Включая крупногабаритные отходы',
    volume: 3.11,
    volumeLabel: '3.11 м³ / год',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    headerClass: styles.paymentHeaderIJ
  }
];

function calculateCost(tariff: number, volume: number): string {
  const value = Math.round((tariff * volume / 12) * 100) / 100;
  return value.toFixed(2).replace('.', ',');
}

const TariffsFiz = () => {
  return (
    <div className={styles.container}>
      
      {/* Official Doc Card */}
      <div className={styles.documentCard}>
        <div className={styles.documentCardInner}>
             
             <div className={styles.documentCardBg} />

            <div className={styles.documentIcon}>
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            
            <div className={styles.documentContent}>
                 <div className={styles.documentMeta}>
                    <span className={styles.documentBadge}>Приказ №214</span>
                    <span className={styles.documentDate}>от 19.12.2025</span>
                 </div>
                 <h2 className={styles.documentTitle}>
                    Об утверждении единого предельного тарифа на 2026 год
                 </h2>
                 <p className={styles.documentSubtitle}>
                    ООО «ЭКОЛОГИСТИКА» — Региональный оператор по обращению с ТКО
                 </p>
            </div>

            <a 
              href="/docs/prikaz_214.pdf" 
              target="_blank"
              rel="noreferrer"
              className={styles.downloadButton}
            >
              <span>Скачать PDF</span>
              <svg style={{width: '1rem', height: '1rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
        </div>
      </div>

      {/* Main Tariffs Grid */}
      <div>
        <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Тарифы по зонам</h3>
            <p className={styles.sectionSubtitle}>Стоимость услуги за 1 м³ с учетом НДС</p>
        </div>

        <div className={styles.zoneGrid}>
            {(Object.keys(ZONES_INFO) as ZoneKey[]).map((zoneKey) => (
                <div key={zoneKey} className={styles.zoneCard}>
                    <div className={styles.zoneHeader}>
                        <div className={styles.zoneInfo}>
                            <h4 className={styles.zoneTitle}>{ZONES_INFO[zoneKey].label}</h4>
                            <p className={styles.zoneDescription}>{ZONES_INFO[zoneKey].description}</p>
                        </div>
                        <div className={`${styles.zoneIcon} ${ZONES_INFO[zoneKey].iconClass}`}></div>
                    </div>

                    <div className={styles.timeline}>
                         <div className={styles.timelineLine} />

                         {TARIFF_DATA.map((period, idx) => (
                             <div key={period.id} className={styles.timelineItem}>
                                 <div className={`${styles.timelineDot} ${idx === 1 ? styles.timelineDotActive : ''}`} />
                                 
                                 <div className={styles.timelineContent}>
                                     <div className={styles.timelineInfo}>
                                         <span className={styles.timelineLabel}>{period.label}</span>
                                         <span className={styles.timelineDate}>{period.start} - {period.end}</span>
                                     </div>
                                     <span className={`${styles.timelinePrice} ${idx === 1 ? styles.timelinePriceActive : ''}`}>
                                        {period.zones[zoneKey].toFixed(2).replace('.', ',')} ₽
                                     </span>
                                 </div>
                             </div>
                         ))}
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Calculated Payment Section */}
      <div>
        <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Сколько платить в месяц?</h3>
            <p className={styles.sectionSubtitle}>
                Расчет стоимости услуги для одного проживающего в зависимости от типа жилья и зоны
            </p>
        </div>

        <div className={styles.paymentGrid}>
            {NORMATIVES.map((norm) => (
                <div key={norm.id} className={styles.paymentCard}>
                    <div className={`${styles.paymentHeader} ${norm.headerClass}`}>
                        <div className={styles.paymentHeaderTop}>
                            <div>
                                <h4 className={styles.paymentHeaderTitle}>{norm.title}</h4>
                                <p className={styles.paymentHeaderSubtitle}>{norm.subtitle}</p>
                            </div>
                            <div className={styles.paymentHeaderIcon}>
                                {norm.icon}
                            </div>
                        </div>
                        <div className={styles.paymentNormative}>
                            <span className={styles.paymentNormativeLabel}>Норматив накопления:</span>
                            <span>{norm.volumeLabel}</span>
                        </div>
                    </div>

                    <div className={styles.paymentContent}>
                         {TARIFF_DATA.map((period) => (
                             <div key={period.id}>
                                <div className={styles.paymentPeriod}>
                                    <span className={styles.paymentPeriodDot}></span>
                                    <span className={styles.paymentPeriodLabel}>{period.start} — {period.end}</span>
                                </div>
                                <div className={styles.paymentZoneGrid}>
                                    {(Object.keys(ZONES_INFO) as ZoneKey[]).map((zoneKey) => (
                                        <div key={zoneKey} className={styles.paymentZoneItem}>
                                            <div className={styles.paymentZoneLabel}>{ZONES_INFO[zoneKey].label}</div>
                                            <div className={styles.paymentZonePrice}>
                                                {calculateCost(period.zones[zoneKey], norm.volume)}
                                                <span className={styles.paymentZoneCurrency}>₽</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                             </div>
                         ))}
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};
export default TariffsFiz;
