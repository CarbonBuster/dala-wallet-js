console.debug = console.log;
const DalaWallet = require('../src/DalaWallet');
const faker = require('faker');
const secret = require('../secret');

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
wallet.register({
    body: {
        firstName: faker.name.firstName(),
        surname: faker.name.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        phoneNumber: '+27123456789',
        email: faker.internet.email()
    },
    apiKey: secret.apiKey
}).then(result=>{
    console.log('result', result);
}).catch(error=>{
    console.log('error', error);
});
// wallet.authenticate({
//     apiKey: secret.apiKey,
//     body: {
//         username: 'jared.leonard',
//         password: 'p@ssw0rd'
//     }
// }).then(JSON.parse).then(result => {
//     console.log('authenticated');
//     const { IdToken } = result;
//     const params = {
//         apiKey: secret.apiKey,
//         authorization: IdToken,
//         body:{
//             someWalletInfo: 'hello wallet'
//         }
//     };
//     return wallet.createWallet(params);
// }).then(console.log).catch(console.log);
