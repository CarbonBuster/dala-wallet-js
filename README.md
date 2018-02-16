# Dala Wallet JavaScript SDK
JavaScript SDK to communicate with the Dala Wallet ecosystem.

## How to use the SDK
### Install the Dala Wallet SDK
`npm install dala-wallet-js` | `yarn add dala-wallet-js`

### Create a wallet instance
```
const DalaWallet = require('../src/DalaWallet');

const wallet = new DalaWallet({
    rpcServer:'http://localhost:8545',
    sender: '0xED507a7758F278277bBB92a77CDD39fcB0B2F983',
    network:'ropsten',
    autoTopupEnabled: true,
    autoTopupAmount: 50000000000000000000,
    defaultDeposit: 50000000000000000000
});
```
### Call one of the endpoints
```
wallet.register({
    body: {
        username: 'some.username',
        password: 's0m3p@ssw0rd',
        phoneNumber: '+27123456789',
        email: 'someone@somewhere.com'
    },
    apiKey: 'my-api-key-that-i-was-given'
}).then(result=>{
    console.log('result', result);
}).catch(error=>{
    console.log('error', error);
});
```
