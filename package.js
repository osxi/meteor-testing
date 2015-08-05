Package.describe({
  name: 'osxi:meteor-testing-tools',
  version: '0.0.1',
  summary: 'Tools to help you test in Meteor',
  git: 'https://github.com/osxi/meteor-testing-tools',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('grigio:babel@0.0.14');
  api.addFiles('meteor-testing-tools.es6.js');
  api.export("MTT");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('grigio:babel@0.0.14');
  api.use('osxi:meteor-testing-tools');
  api.addFiles('meteor-testing-tools-tests.es6.js', ["client"]);
});
