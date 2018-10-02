import React from "react"
import IndividualStatusContext from "./IndividualStatusContext"

 var divStyle = {
  //clear: 'both',
  display: 'grid',
  'grid-template-columns': '1fr 1fr 1fr 1fr',
  width: '100%'
};

var divStyle2 = {
  margin: '0 10px 10px 0',
};

const StatusContextList = ({ statusContexts }) => (
  <div  style={divStyle} >
    {statusContexts.map((statusContext, i) => (
      <div key={i} style={divStyle2}>
        <IndividualStatusContext statusContext={statusContext} />
      </div>
    ))}
  </div>
)

export default StatusContextList
