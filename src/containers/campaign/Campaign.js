import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import './Campaign.scss';
import Team from '../../components/team/Team';

const Campaign = () => {
  const [data, setData] = useState();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    fatchData();
  }, []);

  const onHideModalErrorHandler = () => {
    setShowError(false);
  };

  const fatchData = () => {
    axios
      .get('/default/VisualizatorApi', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,OPTIONS',
          'x-api-key': '9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9',
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => setShowError(true));
  };
  return (
    <div>
      {data ? (
        <React.Fragment>
          <div className="campaign-container">
            <div className="scenario-title">Scenario Visualization</div>
            <div className="campaign-title">{data.campaign_name}</div>
          </div>
          {data.team_instances.map((team) => (
            <Team
              key={team.team_id}
              teamName={team.team_name}
              steps={team.steps}
            />
          ))}
        </React.Fragment>
      ) : null}
      <Modal show={showError} onHide={onHideModalErrorHandler}>
        <Modal.Header closeButton>
          <Modal.Title className="error">Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Something went wrong</Modal.Body>
      </Modal>
    </div>
  );
};

export default Campaign;
