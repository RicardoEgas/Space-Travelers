import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionData } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.missions);

  useEffect(() => {
    dispatch(fetchMissionData());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
      <table>
        <thead>
          <tr>
            <th>Mission ID</th>
            <th>Mission Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_id}</td>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
