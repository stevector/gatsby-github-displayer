import React from "react"
import { Link } from "gatsby"

import Card from '@material-ui/core/Card';

const IndividualStatusContext = function ( statusContext ) {
  
  var divStyle = {
    backgroundColor: "red",
    padding: "10px",
    color: "#fff"
  };
  var aStyle = {
    color: "#ddd",
  };
  switch (statusContext.statusContext.state) {
    case 'ERROR':
    case 'FAILURE':
        divStyle.backgroundColor = "Crimson";
        break;
    case 'PENDING':
    divStyle.backgroundColor = "yellow";
        break;
    case 'SUCCESS':
    divStyle.backgroundColor = "forestGreen";
        break;
    default:
    divStyle.backgroundColor = "grey";
  }

  return (
      <Card style={divStyle}>
        <p><a style={aStyle} href={statusContext.statusContext.targetUrl}>{statusContext.statusContext.state}: {statusContext.statusContext.context}</a></p>
        createdAt: {statusContext.statusContext.createdAt}
      </Card>
)}

export default IndividualStatusContext
