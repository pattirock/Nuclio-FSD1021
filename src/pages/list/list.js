import React, { useEffect, useState } from 'react';
import Card from './card/card';
import styles from './list.module.css';
import Modal from '../../components/modal/modal';
import Pagination from './pagination/pagination';
import { PAGE_SIZE } from '../../constants/pages';

const List = ({ searchValue }) => {
  const [selectedItem, setSelectedItem] = useState();
  const [data, setFilteredData] = useState([]);
  const [filteredData, setData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    if (searchValue !== '') {
      setFilteredData(data.filter(({ title }) => {
        const regex = new RegExp(searchValue, 'g');
        return regex.test(title);
      }))
    }
  }, [searchValue, setFilteredData, data]);

  useEffect(() => {
    if (data.length) {
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_page=${selectedPage}&_limit=${PAGE_SIZE}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [selectedPage]);

  return (
    <div className={styles.container}>
      {filteredData.map(item => <Card item={item} onClick={() => {
        setSelectedItem(item);
      }} />)}
      <Pagination selectedPage={selectedPage} onChangePage={page => setSelectedPage(page)} />
      {!!selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <p><b>Title:</b> {selectedItem.title}</p>
          <p><b>Url:</b> {selectedItem.url}</p>
          <img alt="PhotoImage" src={selectedItem.thumbnailUrl} width="400" />
        </Modal>
      )}
    </div>
  );
};

export default List;
