import React from "react"
import RepositoryList from "../components/RepositoryList"

const RepList = ({ data }) => (
  <div>
    <h1>My repositories</h1>
    <RepositoryList repositories={data.github.search.edges} />
  </div>
)

export default RepList

export const query = graphql`

query RepQuery($searchstring: String!) {
  github {
    search(query: $searchstring, type: REPOSITORY, first: 100) {
      edges {
        node {
         ... on GitHub_Repository {
           name,
           url,
           ... RepoStatus1
         }
       }
      }
    }
  }
}

fragment RepoStatus1 on GitHub_Repository  {
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
        ... CommitStatus1
      }
    }
  }
}
fragment CommitStatus1 on GitHub_Commit {
  status {
    state,
    contexts {
      ... StatusContextInfo1
    }
  }
}
fragment StatusContextInfo1 on GitHub_StatusContext {
  state,
  context,
  createdAt,
  targetUrl
}  
`