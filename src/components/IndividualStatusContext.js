import React from "react"

const IndividualStatusContext = function ( statusContext ) {

  console.log(statusContext);
  
  var divStyle = {backgroundColor: "red"};
  switch (statusContext.statusContext.state) {
    case 'ERROR':
    case 'FAILURE':
        divStyle.backgroundColor = "red";
        break;
    case 'PENDING':
    divStyle.backgroundColor = "yellow";
        break;
    case 'SUCCESS':
    divStyle.backgroundColor = "green";
        break;
    default:
    divStyle.backgroundColor = "grey";
  }

  return (

      <div style={divStyle}>
        <h5><a href="{statusContext.statusContext.targetUrl}">{statusContext.statusContext.state}: {statusContext.statusContext.context}</a></h5>
        createdAt: {statusContext.statusContext.createdAt}
      </div>
  
  
)}



export default IndividualStatusContext
