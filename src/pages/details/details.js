import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const [data, setData] = useState();
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
        .then(json => setData(json));
    }
  }, [id]);

  return (data ? <div>
    <img src={data.thumbnailUrl} />
    <p>{data.title}</p>
  </div> : null);
};

export default Details;
