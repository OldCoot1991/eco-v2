import React from 'react';
import styles from './RotatingBorder.module.css';

interface RotatingBorderProps {
  color: string;
  isVisible?: boolean;
}

/**
 * Animated rotating border effect used in BentoGrid cards on hover.
 */
export const RotatingBorder = ({ color }: RotatingBorderProps) => {
  return (
    <div className={styles.border}>
      <div 
        className={styles.spinner}
        style={{ background: color }}
      />
    </div>
  );
};
