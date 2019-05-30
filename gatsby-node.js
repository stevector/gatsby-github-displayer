const path = require(`path`);

const repos = [
  "fauxalgore/orbs",
  "stevector/nerdologues-d8",
  "stevector/stevector-composer",  
  "stevector/migrate_pantheon",
  "pantheon-systems/terminus-build-tools-plugin",
  "pantheon-systems/search_api_pantheon",
  "pantheon-systems/pantheon_advanced_page_cache",
  "pantheon-systems/pantheon-advanced-page-cache",
  "pantheon-systems/example-drops-8-composer",
  "pantheon-systems/example-wordpress-composer",  
  "pantheon-systems/drops-8",
  "pantheon-systems/wp-saml-auth",
  "pantheon-systems/wp-redis",
  "pantheon-systems/WordPress",
  "pantheon-systems/wp-native-php-sessions",
  "pantheon-systems/solr-power",
  "pantheon-systems/search_api_solor",
];

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Dashboard = path.resolve(`src/components/Dashboard.js`);
    const search_string = repos.map(repoSlug => "repo:" + repoSlug).join(' ');
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
