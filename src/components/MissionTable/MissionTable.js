import Table from 'react-bootstrap/Table';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionTable = () => {
  const table = useSelector((state) => state);
  const dispatch = useDispatch();

  const joinMissionHandler = (e) => {
    const { target: { id } } = e;
    dispatch(joinMission(id));
  };

  const leaveMissionHandler = (e) => {
    const { target: { id } } = e;
    dispatch(leaveMission(id));
  };

  return (
    <Table striped bordered hover id="tablespace">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {table.missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.descrption}</td>
            <td>
              <Stack direction="horizontal" gap={3}>
                {!mission.reserved ? (<Button variant="secondary">Not A Member</Button>
                ) : (<Button variant="info">Active Member</Button>)}
                {!mission.reserved ? (<Button id={mission.id} onClick={joinMissionHandler} variant="light">Join Mission</Button>
                ) : (<Button id={mission.id} onClick={leaveMissionHandler} variant="danger">Leave Mission</Button>)}
              </Stack>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MissionTable;
