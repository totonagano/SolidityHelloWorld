module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
    host: "localhost",
    port: 8545,
    network_id: "*" // Match any network id
   },
   production: {
    host: "bclxyt3dess5.westus.cloudapp.azure.com",
    port: 8545,
    network_id: "*", // Match any network id
    gas: 4712388
   }
  }
};