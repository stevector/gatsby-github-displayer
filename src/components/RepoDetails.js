import React from "react"
import StatusContextList from "./StatusContextList"

const RepoDetails = ({ repository }) => (
  <div>
          url: {repository.node.url}
          <br />
          defaultBranch: {repository.node.defaultBranchRef.name}
          <br />
          state: {repository.node.defaultBranchRef.target.status.state}
          <br />
          <StatusContextList statusContexts={repository.node.defaultBranchRef.target.status.contexts} />
    </div>
)

export default RepoDetails
