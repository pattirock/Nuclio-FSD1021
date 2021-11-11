import React from 'react';
import styles from './card.module.css';

const Card = ({ beer }) => (
  <div className={styles.container} style={{ backgroundImage: `url(${beer.image_url})` }}>
    <div className={styles.info}>
      <p><b>{beer.name}</b></p>
      <p>{beer.tagline}</p>
    </div>
  </div>
);

export default Card;
