const path = require(`path`);

const repos = [
  "stevector/migrate_pantheon",
  "pantheon-systems/terminus-build-tools-plugin",
  "stevector/nerdologues-d8",
  "pantheon-systems/search_api_pantheon",
  "pantheon-systems/pantheon_advanced_page_cache",
  "pantheon-systems/pantheon-advanced-page-cache",
  "pantheon-systems/example-drops-8-composer",
  "pantheon-systems/drops-8",
  "pantheon-systems/wp-saml-auth",
  "pantheon-systems/wp-redis",
  "pantheon-systems/WordPress",
  "pantheon-systems/wp-native-php-sessions",
  "pantheon-systems/solr-power",
  "pantheon-systems/search_api_solor",
  "stevector/migrate_pantheon"
];

exports.createPages = async ({ actions: { createPage } }) => {
  
  const search_string = repos.map(repoSlug => "repo:" + repoSlug).join(' ');  
  
  createPage({
    path: `/`,
    component: path.resolve(`src/components/Dashboard.js`),
    context: { searchstring:search_string },
  })

  createPage({
    path: `/material-table`,
    component: path.resolve(`src/components/Table.js`),
    context: { searchstring:search_string },
  })



}
