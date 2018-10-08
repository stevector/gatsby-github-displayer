const path = require(`path`);

const repos = [
  "repo:stevector/migrate_pantheon",
  "repo:pantheon-systems/terminus-build-tools-plugin",
  "repo:stevector/nerdologues-d8",
  "repo:pantheon-systems/pantheon-wordpress-develop",
  "repo:pantheon-systems/example-drops-8-composer",
  "repo:pantheon-systems/drops-8",
  "repo:pantheon-systems/wp-saml-auth",
  "repo:pantheon-systems/wp-redis",
  "repo:pantheon-systems/WordPress",
  "repo:pantheon-systems/wp-native-php-sessions",
  "repo:pantheon-systems/solr-power",
  "repo:stevector/migrate_pantheon"
];

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Dashboard = path.resolve(`src/components/Dashboard.js`);
    const search_string = repos.join(' ');
    // Query for recipe nodes to use in creating pages.
    resolve(
      createPage({
        path: '/',
        component: Dashboard,
        context: {
          searchstring:search_string
        },
      })
    )
  })
}
