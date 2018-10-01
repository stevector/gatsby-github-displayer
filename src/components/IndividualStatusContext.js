import React from "react"

const IndividualStatusContext = ({ statusContext }) => (
  
      <div>
        <h5><a href="{statusContext.targetUrl}">{statusContext.state}: {statusContext.context}</a></h5>
        createdAt: {statusContext.createdAt}
      </div>
  
  
)



export default IndividualStatusContext
