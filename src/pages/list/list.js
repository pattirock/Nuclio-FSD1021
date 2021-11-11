import React from 'react';
import Card from './card/card';
import styles from './list.module.css';

const List = () => (
  <div className={styles.container}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);

export default List;
