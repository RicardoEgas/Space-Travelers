import React from 'react';
import PropTypes from 'prop-types';

const RocketInfo = ({ name, description, image }) => (
  <div className="rockets-container">
    <div>
      <img
        className="rockets-pictures"
        src={image[0]}
        alt=""
      />
    </div>
    <div className="rockets-info">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button" className="reserve-rocket">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketInfo;

RocketInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
};
