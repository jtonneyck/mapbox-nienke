import React from 'react';
import "./Diggy.css";
function Diggy(props) {
    debugger
    return (
        <div className="diggy">
            <h1>{props.match.params.id}</h1>
        </div>
    )
}

export default Diggy;
