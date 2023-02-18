import React from "react";
import { useLocation } from "react-router-dom";
function Nomatch() {
  let location = useLocation();
  return (
    <div>
      <center>
        <h1>ERROR 404</h1>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </center>
    </div>
  );
}

export default Nomatch;
