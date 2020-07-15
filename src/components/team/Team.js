import React from 'react';
import Step from '../step/Step';
import './Team.scss';

const Team = (props) => {
  return (
    <div className="team-container ">
      <div className="team-title">{props.teamName}</div>
      <div className="circle-container">
        {props.steps.map((step) => (
          <Step
            key={step.step_id}
            stepName={step.step_name}
            status={step.status}
          />
        ))}
        <Step stepName="Attack Complate" status="" />
      </div>
    </div>
  );
};

export default Team;
