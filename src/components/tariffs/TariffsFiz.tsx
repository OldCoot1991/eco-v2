"use client";

import React from 'react';
import styles from "./TariffsFiz.module.css";
import { useTranslation } from "@/lib/hooks/useTranslation";

type ZoneKey = 'zone1' | 'zone2' | 'zone3';

interface TariffPeriod {
  id: string;
  label: string;
  start: string;
  end: string;
  zones: Record<ZoneKey, number>;
}

const TariffsFiz = () => {
  const { t } = useTranslation();
  const isEn = t.common.download === "Download"; 

  const TARIFF_DATA: TariffPeriod[] = [
    {
      id: 'period1',
      label: t.common.halfYear1,
      start: '01.01.2026',
      end: '30.09.2026',
      zones: { zone1: 356.73, zone2: 388.15, zone3: 358.43 }
    },
    {
      id: 'period2',
      label: t.common.halfYear2,
      start: '01.10.2026',
      end: '31.12.2026',
      zones: { zone1: 378.33, zone2: 410.32, zone3: 383.21 }
    }
  ];

  const ZONES_INFO: Record<ZoneKey, { label: string; description: string; iconClass: string }> = {
    zone1: { label: t.tariffs.zone1, description: t.tariffs.zone1Desc, iconClass: styles.zoneIcon1 },
    zone2: { label: t.tariffs.zone2, description: t.tariffs.zone2Desc, iconClass: styles.zoneIcon2 },
    // Simplified logic for Zone 3
    zone3: { 
        label: isEn ? "Zone #3" : "Зона 3", 
        description: isEn ? "Western group of districts" : "Западная группа районов", 
        iconClass: styles.zoneIcon3 
    } 
  };
  
  const NORMATIVES = [
    {
      id: 'MD',
      title: t.tariffs.mdTitle,
      subtitle: t.tariffs.mdSub,
      volume: 2.83,
      volumeLabel: `2.83 м³ / ${isEn ? 'year' : 'год'}`,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      headerClass: styles.paymentHeaderMD
    },
    {
      id: 'IJ',
      title: t.tariffs.ijTitle,
      subtitle: t.tariffs.ijSub,
      volume: 3.11,
      volumeLabel: `3.11 м³ / ${isEn ? 'year' : 'год'}`,
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
                    <span className={styles.documentBadge}>{t.tariffs.order}</span>
                    <span className={styles.documentDate}>{t.tariffs.date}</span>
                 </div>
                 <h2 className={styles.documentTitle}>
                    {t.tariffs.orderFullTitle}
                 </h2>
                 <p className={styles.documentSubtitle}>
                    {t.tariffs.orderSubtitle}
                 </p>
            </div>

            <a 
              href="/docs/prikaz_214.pdf" 
              target="_blank"
              rel="noreferrer"
              className={styles.downloadButton}
            >
              <span>{t.tariffs.download}</span>
              <svg style={{width: '1rem', height: '1rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
        </div>
      </div>

      {/* Main Tariffs Grid */}
      <div>
        <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>{t.tariffs.zonesTitle}</h3>
            <p className={styles.sectionSubtitle}>{t.tariffs.zonesSubtitle}</p>
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
            <h3 className={styles.sectionTitle}>{t.tariffs.calcTitle}</h3>
            <p className={styles.sectionSubtitle}>
                {t.tariffs.calcSubtitle}
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
                            <span className={styles.paymentNormativeLabel}>{t.tariffs.normLabel}:</span>
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
