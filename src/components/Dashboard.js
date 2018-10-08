import React from "react"
import RepositoryList from "../components/RepositoryList"

const Dashboard = ({ data }) => (
  <div>
    <h1>My repositories</h1>
    <RepositoryList repositories={data.github.search.edges} />
  </div>
)

export default Dashboard

export const query = graphql`

query DashboardQuery($searchstring: String!) {
  github {
    search(query: $searchstring, type: REPOSITORY, first: 100) {
      edges {
        node {
         ... on GitHub_Repository {
           name,
           url,
           ... RepoStatus
         }
       }
      }
    }
  }
}

fragment RepoStatus on GitHub_Repository  {
  name,
  defaultBranchRef {
    name,
    target {

      ... on GitHub_Commit {
        id,
        messageBody,
        author {
          avatarUrl
          date
          email
          name
        },
        ... CommitStatus
      }
    }
  }
}
fragment CommitStatus on GitHub_Commit {
  status {
    state,
    contexts {
      ... StatusContextInfo
    }
  }
}
fragment StatusContextInfo on GitHub_StatusContext {
  state,
  context,
  createdAt,
  targetUrl
}  
`