import React from "react";

const FirstComp = ({ name, getData }) => {
  const test = "World";
  getData(test);
  return (
    <div>
      <h2>Welcome, {name} !</h2>
    </div>
  );
};

export default FirstComp;
