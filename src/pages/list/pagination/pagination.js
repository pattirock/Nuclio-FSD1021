import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './pagination.module.css';
import { PAGE_SIZE } from '../../../constants/pages';

const Pagination = ({ onChangePage, selectedPage = 1 }) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=1000')
      .then(response => response.json())
      .then(json => setTotalPages(json.length / PAGE_SIZE));
  });

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {Array.from(Array(totalPages), (x, index) => index + 1).map(page => <li onClick={() => onChangePage(page)} className={clsx(styles.item, { [styles.selected]: page === selectedPage })}>{page}</li>)}
      </ul>
    </div>
  );
};

export default Pagination;
