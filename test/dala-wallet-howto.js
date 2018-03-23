console.debug = console.log;
const DalaWallet = require('../src/DalaWallet');
const faker = require('faker');
const secret = require('../secret');

if (typeof localStorage === 'undefined' || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

const wallet = new DalaWallet({
  rpcServer: secret.rpcServer,
  sender: secret.sender,
  network: 'ropsten',
  autoTopupEnabled: true,
  autoTopupAmount: 50000000000000000000,
  defaultDeposit: 50000000000000000000,
  baseUrl: secret.networks.ropsten.baseUrl,
  apiKey: secret.apiKey
});

return wallet.settle();
// return wallet
//   .close()
//   .then(console.log)
//   .then(() => wallet.settle())
//   .then(console.log)
//   .catch(console.log);

// const body = {
//     firstName: faker.name.firstName(),
//     surname: faker.name.lastName(),
//     username: faker.internet.userName(),
//     password: faker.internet.password(),
//     phoneNumber: '+27103131101',
//     email: faker.internet.email()
// };
// console.log(body);
// wallet.register({
//     body,
//     apiKey: secret.apiKey
// }).then(result=>{
//     console.log('result', result);
// }).catch(error=>{
//     console.log('error', error);
// });
wallet
  .authenticate({
    apiKey: secret.apiKey,
    body: {
      username: 'Shanon_Hudson',
      password: 'x9elfqmp5luGt7c'
    }
  })
  .then(result => {
    console.log('authenticated');
    const { IdToken } = result;
    const params = {
      apiKey: secret.apiKey,
      authorization: IdToken,
      body: {}
    };
    return wallet.createWallet(params);
  })
  .then(console.log)
  .catch(console.log);
