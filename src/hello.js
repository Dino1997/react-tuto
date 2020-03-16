import React from "react";

function Hellothere() {
  const hello = () => {
    console.log("Hello obiwan");
  };
  return (
    <div>
      <button onClick={hello}>Bonsoir</button>
    </div>
  );
}

export default Hellothere;
