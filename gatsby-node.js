const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Dashboard = path.resolve(`src/components/Dashboard.js`)
    // Query for recipe nodes to use in creating pages.
    resolve(
      createPage({
        path: 'dashboard',
        component: Dashboard,
        context: {
          searchstring: "repo:stevector/migrate_pantheon repo:stevector/nerdologues-d8 repo:pantheon-systems/terminus-build-tools-plugin"
        },
      })
    )
  })
}