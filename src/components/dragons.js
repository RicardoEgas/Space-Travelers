import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragonsAsync } from '../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  useEffect(() => {
    dispatch(fetchDragonsAsync());
  }, []);
  console.log(dragons);
  return (
    <section className="homePageDiv">
      {dragons.map((dragon) => (
        console.log(dragon.name)
      ))}
    </section>
  );
};

export default Dragons;
