// splunk-instrumentation.js

import SplunkOtelWeb from '@splunk/otel-web';
SplunkOtelWeb.init({
   realm: "us1",
   rumAccessToken: "o_JP1UoFoi9CQ0zj0ILNRg",
   applicationName: "frontendApp",
   deploymentEnvironment: "dev"
});
