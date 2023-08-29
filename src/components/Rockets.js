import { useSelector } from 'react-redux';
import RocketInfo from './rocketInfo';
import './Rockets.css';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);

  return (
    <div>
      {rockets.map((rocket) => (
        <RocketInfo
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.flickr_images}
        />
      ))}
    </div>
  );
};

export default Rockets;
