import React from "react"
import StatusContextList from "./StatusContextList"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RepositoryList = ({ repositories }) => (
  <div>
    {repositories.map((repository, i) => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {repository.node.name}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          url: {repository.node.url}
          <br />
          defaultBranch: {repository.node.defaultBranchRef.name}
          <br />
          status: {repository.node.defaultBranchRef.target.status.state}
          <br />
          <StatusContextList statusContexts={repository.node.defaultBranchRef.target.status.contexts} />
        </ExpansionPanelDetails>
     </ExpansionPanel>
    ))}
  </div>
)

export default RepositoryList
