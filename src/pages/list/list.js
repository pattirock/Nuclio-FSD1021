import React from 'react';
import Card from './card/card';
import data from '../../assets/beers.json';
import styles from './list.module.css';

const List = () => {
  console.debug(data);
  return (
    <div className={styles.container}>
      {data.map(beer => <Card beer={beer} />)}
    </div>
  );
};

export default List;
