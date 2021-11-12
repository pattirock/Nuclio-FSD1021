import React, { useEffect, useState } from 'react';
import Card from './card/card';
import data from '../../assets/response.json';
import styles from './list.module.css';
import Modal from '../../components/modal/modal';

const List = ({ searchValue }) => {
  const [selectedItem, setSelectedItem] = useState();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (searchValue !== '') {
      setFilteredData(data.filter(({ title }) => {
        const regex = new RegExp(searchValue, 'g');
        return regex.test(title);
      }))
    }
  }, [searchValue, setFilteredData]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
      .then(response => response.json())
      .then(json => setFilteredData(json))
  }, []);

  return (
    <div className={styles.container}>
      {filteredData.map(item => <Card item={item} onClick={() => {
        setSelectedItem(item);
      }} />)}
      {!!selectedItem && <Modal onClose={() => setSelectedItem(null)}>
        <p><b>Title:</b> {selectedItem.title}</p>
        <p><b>Url:</b> {selectedItem.url}</p>
        <img src={selectedItem.thumbnailUrl} width="400" />
      </Modal>}
    </div>
  );
};

export default List;
