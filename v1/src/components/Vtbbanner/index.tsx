import React from 'react';
import styles from '../Vtbbanner/vtbbanner.module.css'

const Banner = () => {
  return (
    <div className={styles.container}>
      <a href="https://online.vtb.ru" target="_blank">
      <div className={styles.vtbbanner}></div>
      </a>
    </div>
  )
};

export default Banner;