console.debug = console.log;
const DalaWallet = require('../src/DalaWallet');
const faker = require('faker');
const uuid = require('uuid');
const fs = require('fs');
const secret = require('../secret')[process.env.STAGE || 'sandbox'];

if (typeof localStorage === 'undefined' || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
console.log('creating ');
let wallet = new DalaWallet({
  rpcServer: secret.rpcServer,
  sender: secret.sender,
  network: process.env.STAGE || 'sandbox',
  autoTopupEnabled: true,
  autoTopupAmount: 50000000000000000000,
  defaultDeposit: 50000000000000000000,
  baseUrl: secret.baseUrl,
  apiKey: secret.apiKey
});
// return wallet.settle();
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
//     body
// }).then(result=>{
//     console.log('result', result);
// }).catch(error=>{
//     console.log('error', error);
// });
// const payload = {
//   body: secret.accounts.walaRewards
// };
// console.log(payload);
// wallet
//   .authenticate(payload)
//   .then(result => {
//     console.log('authenticated');
//     const { IdToken } = result;
//     return wallet.createWallet({
//       authorization: IdToken,
//       body: {
//         from: secret.accounts.walaPooled.address
//       }
//     });
//     // const params = {
//     //   authorization: IdToken,
//     //   body: {
//     //       from: secret.accounts.walaPooled.address,
//     //       to: '0xe807b31ac4399925cb4529f514533abafbd6bfb1',//secret.accounts.walaPooled.address,
//     //       amount: '135.135135',
//     //       description: 'Apr-23 Deposit'
//     //   }
//     // };
//     // return wallet.internalTransfer(params);
//   })
//   .then(result=>{
//     console.log('========= DONE ==========');
//     console.log(result);
//   })
//   .catch(console.log);

create()
  .then(result => {
    console.log('created', result);
  })
  .catch(error => {
    console.log(error);
  });

function createWallet() {
  return wallet;
}

function createCredentials(){
  return Promise.resolve(secret.accounts.walaRewards);
}

function create() {
  console.log('create()');
  wallet = createWallet();
  console.log('created wallet');
  return createCredentials()
    .then(authenticate)
    .then(createOnChainWallet);
}

function authenticate(credentials) {
  console.log('authenticate()');
  return wallet.authenticate({
    body: {
      username: credentials.username,
      password: credentials.password
    }
  });
}

function createOnChainWallet(authResult) {
  console.log('authenticated', authResult);
  const { IdToken } = authResult;

  return wallet.createWallet({
    authorization: IdToken
  });
}
