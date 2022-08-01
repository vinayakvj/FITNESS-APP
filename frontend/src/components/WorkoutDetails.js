import React from "react";

function WorkOutDetails(props) {
  return (
    <div className="workout-details">
      <h4>{props.title}</h4>
      <p>
        <strong>Load(Kg): </strong>
        {props.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {props.reps}
      </p>
    </div>
  );
}

export default WorkOutDetails;
