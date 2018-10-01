import React from "react"
import RepositoryList from "../components/RepositoryList"

const Index = ({ data }) => (
  <div>
    <h1>My repositories</h1>
    <RepositoryList repositories={data.github.search.edges} />
  </div>
)

export default Index

export const query = graphql`
  query RepositoriesQuery {
    github {
      search(query: "repo:stevector/migrate_pantheon repo:stevector/nerdologues-d8 repo:pantheon-systems/terminus-build-tools-plugin", type: REPOSITORY, first: 100) {
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

/*



{github  {
   search(query: "repo:stevector/migrate_pantheon repo:stevector/nerdologues-d8 repo:pantheon-systems/terminus-build-tools-plugin", type: REPOSITORY, first: 100) {
     edges {
       node {
        ... on GitHub_Repository {
          ... RepoStatus,
          url
        }
      }
     }
   }
}}
  
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


*/