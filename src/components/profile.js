import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reserveRocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {
            reserveRocket.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default MyProfile;
