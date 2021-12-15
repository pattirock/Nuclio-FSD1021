import React from 'react';
import styles from './card.module.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ item, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${item.thumbnailUrl})` }} onClick={() => {
      console.debug(item.id);
     navigate(`/photo/${item.id}`);
      // onClick();
    }}>
      <div className={styles.info}>
        <p><b>{item.title}</b></p>
      </div>
    </div>
  );
};

export default Card;
