import React from "react"
import IndividualStatusContext from "./IndividualStatusContext"
import StatusContextList from "./StatusContextList"

const RepositoryList = ({ repositories }) => (
  <div>
    {repositories.map((repository, i) => (
      <div key={i}>
        <h2>{repository.node.name}</h2>
        url: {repository.node.url}
        
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
