import "./UserCards.css";

import React from "react";

const UserCards = (props) => {
  return (
    <div className="card-wrap">
      {/* <h1>This is my card.</h1> */}
      <div className="info-flex">
        <div>
          <img
            className="card-img"
            src={props.src}
            height={80}
            alt="User-Image"
          />
        </div>
        <div>
          <h3>
            <span className="response-heading"> NAME: </span>
            <span className="response-data">{props.name}</span>
          </h3>
          <h3>
            <span className="response-heading">Gender: </span>
            <span className="response-data">{props.gender}</span>
          </h3>
          <h3>
            <span className="response-heading">Phone: </span>
            <span className="response-data">{props.phone}</span>
          </h3>
        </div>
      </div>
      <h3>
        <span className="response-heading">Email: </span>
        <span className="response-data">{props.email}</span>
      </h3>
      <h3>
        <span className="response-heading">Twitter: </span>
        <span className="response-data">{props.twitter}</span>
      </h3>
      <h3>
        <span className="response-heading">Location: </span>
        <span className="response-data">{props.location}</span>
      </h3>
    </div>
  );
};

export default UserCards;
