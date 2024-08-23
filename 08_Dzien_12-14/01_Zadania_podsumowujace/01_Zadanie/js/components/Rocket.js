import React from "react";

const imgSrc = "https://i.pinimg.com/originals/bc/70/cf/bc70cf7803b64dc93def87bdf49ceacf.gif";

const Rocket = ({ isLaunched }) =>
  <img
    alt="rocket"
    src={imgSrc}
    className={`rocket ${isLaunched ? 'launched': ''}`}
  />;

export default Rocket;
