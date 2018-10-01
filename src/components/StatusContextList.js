import React from "react"
import IndividualStatusContext from "./IndividualStatusContext"

const StatusContextList = ({ statusContexts }) => (
  <div>
    {statusContexts.map((statusContext, i) => (
      <div key={i}>
        <IndividualStatusContext statusContext={statusContext} />
       
            
      </div>
    ))}
  </div>
)

export default StatusContextList
