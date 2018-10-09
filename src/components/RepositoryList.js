import React from "react"
import RepoDetails  from "./RepoDetails"
import './RepositoryList.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RepositoryList = ({ repositories }) => (

  <div>
    {repositories.map((repository, i) => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <span class={repository.node.defaultBranchRef.target.status.state}>{repository.node.defaultBranchRef.target.status.state}</span>
          {repository.node.name}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RepoDetails repository={repository} />
        </ExpansionPanelDetails>
     </ExpansionPanel>
    ))}
  </div>
)

export default RepositoryList
