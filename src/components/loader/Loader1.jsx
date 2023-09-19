import React from 'react'
import './Loader1.scss'
function Loader1() {
  return (
    <div id="container">
      <p className="loading-text" aria-label="Loading">
        <span className="letter" aria-hidden="true">
          L
        </span>
        <span className="letter" aria-hidden="true">
          o
        </span>
        <span className="letter" aria-hidden="true">
          a
        </span>
        <span className="letter" aria-hidden="true">
          d
        </span>
        <span className="letter" aria-hidden="true">
          i
        </span>
        <span className="letter" aria-hidden="true">
          n
        </span>
        <span className="letter" aria-hidden="true">
          g
        </span>
      </p>
    </div>
  );
}

export default Loader1