import React from 'react';
import styles from './card.module.css';

const Card = ({ item }) => (
  <div className={styles.container} style={{ backgroundImage: `url(${item.thumbnailUrl})` }}>
    <div className={styles.info}>
      <p><b>{item.title}</b></p>
    </div>
  </div>
);

export default Card;
