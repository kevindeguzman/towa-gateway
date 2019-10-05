const { ServiceBroker } = require("moleculer");
const ApiService = require("moleculer-web");

const gateway = new ServiceBroker({
  nodeID: "towa-gateway",
  transporter: "NATS",
  logLevel: "debug",
});

gateway.createService({
  mixins: [ApiService],

  settings: {
      routes: [{
          path: "/api",
          aliases: {
              "GET greeter1": "greeter1.*",
              "GET greeter2": "greeter2.*",
          }
      }]
  }
});

gateway.start();