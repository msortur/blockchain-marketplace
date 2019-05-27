module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "10.85.223.181",
               port: 8545,
               network_id: "*" // Match any network id
          },
          chainskills: {
            host: "localhost",
            port: 8545,
            network_id: "4224",
            gas: 4700000
          }
     }
};
