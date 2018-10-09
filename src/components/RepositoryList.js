import React from "react"
import RepoDetails  from "./RepoDetails"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RepositoryList = ({ repositories }) => (

  <div>
    {repositories.map((repository, i) => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
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
