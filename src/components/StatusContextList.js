import React from "react"
import './StatusContextList.css';
import IndividualStatusContext from "./IndividualStatusContext"

 var divStyle = {
  //clear: 'both',

};

var divStyle2 = {
//  margin: '0 10px 10px 0',
};

const StatusContextList = ({ statusContexts }) => (
  <div class="StatusContextList" style={divStyle} >
    {statusContexts.map((statusContext, i) => (
      <div key={i} style={divStyle2}>
        <IndividualStatusContext statusContext={statusContext} />
      </div>
    ))}
  </div>
)

export default StatusContextList
