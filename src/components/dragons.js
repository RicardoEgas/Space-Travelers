import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragonsAsync } from '../redux/dragons/dragonsSlice';
import './Dragons.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  useEffect(() => {
    dispatch(fetchDragonsAsync());
  });

  return (
    <section className="dragon">
      {dragons.map((dragon) => (
        <div key={dragon.id} className="card">
          <div>
            <h2>{dragon.name}</h2>
            <em>{dragon.type}</em>
          </div>
          <div
            className="mainImg"
            style={{
              height: '300px', backgroundImage: `url(${dragon.flickr_images[1]})`, backgroundSize: 'cover',
            }}
          >
            <button type="button">Reserve dragon</button>
          </div>
          <div className="images">
            {dragon.flickr_images.map((pic) => (<img key={pic} alt="" src={pic} />))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dragons;
