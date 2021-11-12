import React, { useEffect, useState } from 'react';
import Card from './card/card';
import data from '../../assets/response.json';
import styles from './list.module.css';

const List = ({ searchValue }) => {
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    if (searchValue !== '') {
      setFilteredData(data.filter(({ title }) => {
        const regex = new RegExp(searchValue, 'g');
        return regex.test(title);
      }))
    }
  }, [searchValue, setFilteredData]);

  return (
    <div className={styles.container}>
      {filteredData.map(item => <Card item={item} />)}
    </div>
  );
};

export default List;
