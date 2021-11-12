import React, { useEffect, useState } from 'react';
import Card from './card/card';
import data from '../../assets/beers.json';
import styles from './list.module.css';

const List = ({ searchValue }) => {
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    if (searchValue !== '') {
      setFilteredData(data.filter(({ name }) => {
        const regex = new RegExp(searchValue, 'g');
        return regex.test(name);
      }))
    }
  }, [searchValue, setFilteredData]);

  return (
    <div className={styles.container}>
      {filteredData.map(beer => <Card beer={beer} />)}
    </div>
  );
};

export default List;
