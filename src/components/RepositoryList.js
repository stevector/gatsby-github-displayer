import React from "react"
import IndividualStatusContext from "./IndividualStatusContext"
import StatusContextList from "./StatusContextList"


var divStyle = {
  //clear: 'both',
  border: '3px solid #000',
  margin: '20px',
  padding: '20px'
};

const RepositoryList = ({ repositories }) => (
  <div>
    {repositories.map((repository, i) => (
      <div  style={divStyle} key={i}>
        <h2>{repository.node.name}</h2>
        url: {repository.node.url}
        <br />
        defaultBranch: {repository.node.defaultBranchRef.name}
        <br />
        status: {repository.node.defaultBranchRef.target.status.state}
        <br />
         <StatusContextList statusContexts={repository.node.defaultBranchRef.target.status.contexts} />


            
      </div>
    ))}
  </div>
)

export default RepositoryList
