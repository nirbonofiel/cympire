import React from 'react';
import './Step.scss';

const Step = (props) => {
  return (
    <React.Fragment>
      <div className="circle-border">
        <div className={`circle-body ${props.status}`}>
          <svg className={props.status}>
            <circle cx="73" cy="73" r="74"></circle>
            <circle cx="73" cy="73" r="74"></circle>
          </svg>
          <div className="circle-content">
            <span>{props.stepName}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Step;
