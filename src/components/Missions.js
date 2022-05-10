import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map((mission) => (<MissionCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />))}
      </div>
    );
  }
}

Missions.propTypes = {
  missions: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }),
};

Missions.defaultProps = {
  missions: [],
};

export default Missions;
