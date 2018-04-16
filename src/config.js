'use strict';

module.exports = {
    sandbox: {
        receiver: '0xD8b92F7DEbb6AD8f20EA6f6130Bf513936954cAC',
        contractAddress: '0x1644b3ec3bdee95f31d8d5c9ef82d0f45dfa314d',
        contractAbi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "topUp",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "challenge_period",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "getChannelInfo",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    },
                    {
                        "name": "",
                        "type": "uint32"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    }
                ],
                "name": "extractBalanceProofSignature",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    },
                    {
                        "name": "_closing_sig",
                        "type": "bytes"
                    }
                ],
                "name": "cooperativeClose",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_closing_sig",
                        "type": "bytes"
                    }
                ],
                "name": "extractClosingSignature",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "name": "removeTrustedContracts",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "withdrawn_balances",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint192"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    }
                ],
                "name": "uncooperativeClose",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "version",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "settle",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "channel_deposit_bugbounty_limit",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "closing_requests",
                "outputs": [
                    {
                        "name": "closing_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "settle_block_number",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "topUpDelegate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "channels",
                "outputs": [
                    {
                        "name": "deposit",
                        "type": "uint192"
                    },
                    {
                        "name": "open_block_number",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "getKey",
                "outputs": [
                    {
                        "name": "data",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner_address",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "name": "addTrustedContracts",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "trusted_contracts",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    }
                ],
                "name": "withdraw",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "createChannel",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "tokenFallback",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "token",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "createChannelDelegate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_token_address",
                        "type": "address"
                    },
                    {
                        "name": "_challenge_period",
                        "type": "uint32"
                    },
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelToppedUp",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_balance",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelCloseRequested",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "indexed": false,
                        "name": "_receiver_tokens",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelSettled",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_withdrawn_balance",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelWithdraw",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_trusted_contract_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_trusted_status",
                        "type": "bool"
                    }
                ],
                "name": "TrustedContract",
                "type": "event"
            }
        ],
        tokenAddress: '0x5d689a3de1a648f85d23231a2d95fa89ce3d41fc',
        tokenAbi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "state",
                        "type": "bool"
                    }
                ],
                "name": "setTransferAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "setReleaseAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "unpause",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "upgrade",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "upgradeAgent",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "releaseTokenTransfer",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "upgradeMaster",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getUpgradeState",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "transferAgents",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "released",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "canUpgrade",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalUpgraded",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "releaseAgent",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "agent",
                        "type": "address"
                    }
                ],
                "name": "setUpgradeAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "remaining",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isToken",
                "outputs": [
                    {
                        "name": "weAre",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "master",
                        "type": "address"
                    }
                ],
                "name": "setUpgradeMaster",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_symbol",
                        "type": "string"
                    },
                    {
                        "name": "_totalSupply",
                        "type": "uint256"
                    },
                    {
                        "name": "_decimals",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "Upgrade",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "agent",
                        "type": "address"
                    }
                ],
                "name": "UpgradeAgentSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Minted",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ]
    },
    ropsten: {
        receiver: '0x285E74aEb7e95E787BA5778E9229c9650ECF770A',
        contractAddress: '0x1644b3ec3bdee95f31d8d5c9ef82d0f45dfa314d',
        contractAbi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "topUp",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "challenge_period",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "getChannelInfo",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    },
                    {
                        "name": "",
                        "type": "uint32"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    }
                ],
                "name": "extractBalanceProofSignature",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    },
                    {
                        "name": "_closing_sig",
                        "type": "bytes"
                    }
                ],
                "name": "cooperativeClose",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_closing_sig",
                        "type": "bytes"
                    }
                ],
                "name": "extractClosingSignature",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "name": "removeTrustedContracts",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "withdrawn_balances",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint192"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    }
                ],
                "name": "uncooperativeClose",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "version",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "settle",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "channel_deposit_bugbounty_limit",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "closing_requests",
                "outputs": [
                    {
                        "name": "closing_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "settle_block_number",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "topUpDelegate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "channels",
                "outputs": [
                    {
                        "name": "deposit",
                        "type": "uint192"
                    },
                    {
                        "name": "open_block_number",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "getKey",
                "outputs": [
                    {
                        "name": "data",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner_address",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "name": "addTrustedContracts",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "trusted_contracts",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    }
                ],
                "name": "withdraw",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "createChannel",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "tokenFallback",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "token",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "createChannelDelegate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_token_address",
                        "type": "address"
                    },
                    {
                        "name": "_challenge_period",
                        "type": "uint32"
                    },
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelToppedUp",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_balance",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelCloseRequested",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "indexed": false,
                        "name": "_receiver_tokens",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelSettled",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_withdrawn_balance",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelWithdraw",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_trusted_contract_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_trusted_status",
                        "type": "bool"
                    }
                ],
                "name": "TrustedContract",
                "type": "event"
            }
        ],
        tokenAddress: '0x5d689a3de1a648f85d23231a2d95fa89ce3d41fc',
        tokenAbi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "state",
                        "type": "bool"
                    }
                ],
                "name": "setTransferAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "setReleaseAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "unpause",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "upgrade",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "upgradeAgent",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "releaseTokenTransfer",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "upgradeMaster",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getUpgradeState",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "transferAgents",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "released",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "canUpgrade",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalUpgraded",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "releaseAgent",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "agent",
                        "type": "address"
                    }
                ],
                "name": "setUpgradeAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "remaining",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isToken",
                "outputs": [
                    {
                        "name": "weAre",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "master",
                        "type": "address"
                    }
                ],
                "name": "setUpgradeMaster",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_symbol",
                        "type": "string"
                    },
                    {
                        "name": "_totalSupply",
                        "type": "uint256"
                    },
                    {
                        "name": "_decimals",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "Upgrade",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "agent",
                        "type": "address"
                    }
                ],
                "name": "UpgradeAgentSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Minted",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ]
    },
    mainnet: {
        receiver: '0xb07c70700adf4fa72180e6cee50087258fdb4143',
        contractAddress: '0xe095fb63a37f06db4d7d4ca63f2449efa405e412',
        contractAbi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "topUp",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "challenge_period",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "getChannelInfo",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    },
                    {
                        "name": "",
                        "type": "uint32"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    },
                    {
                        "name": "",
                        "type": "uint192"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    }
                ],
                "name": "extractBalanceProofSignature",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    },
                    {
                        "name": "_closing_sig",
                        "type": "bytes"
                    }
                ],
                "name": "cooperativeClose",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_closing_sig",
                        "type": "bytes"
                    }
                ],
                "name": "extractClosingSignature",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "name": "removeTrustedContracts",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "withdrawn_balances",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint192"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    }
                ],
                "name": "uncooperativeClose",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "version",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "settle",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "channel_deposit_bugbounty_limit",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "closing_requests",
                "outputs": [
                    {
                        "name": "closing_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "settle_block_number",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "topUpDelegate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "channels",
                "outputs": [
                    {
                        "name": "deposit",
                        "type": "uint192"
                    },
                    {
                        "name": "open_block_number",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    }
                ],
                "name": "getKey",
                "outputs": [
                    {
                        "name": "data",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner_address",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "name": "addTrustedContracts",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "trusted_contracts",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "name": "_balance_msg_sig",
                        "type": "bytes"
                    }
                ],
                "name": "withdraw",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "createChannel",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "tokenFallback",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "token",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "createChannelDelegate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_token_address",
                        "type": "address"
                    },
                    {
                        "name": "_challenge_period",
                        "type": "uint32"
                    },
                    {
                        "name": "_trusted_contracts",
                        "type": "address[]"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_added_deposit",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelToppedUp",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_balance",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelCloseRequested",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_balance",
                        "type": "uint192"
                    },
                    {
                        "indexed": false,
                        "name": "_receiver_tokens",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelSettled",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_sender_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_receiver_address",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_open_block_number",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "name": "_withdrawn_balance",
                        "type": "uint192"
                    }
                ],
                "name": "ChannelWithdraw",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_trusted_contract_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_trusted_status",
                        "type": "bool"
                    }
                ],
                "name": "TrustedContract",
                "type": "event"
            }
        ],
        tokenAddress: '0xa87c3ec87eb802aad080df0adb331e504d327e5d',
        tokenAbi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "state",
                        "type": "bool"
                    }
                ],
                "name": "setTransferAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "setReleaseAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "unpause",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "upgrade",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "upgradeAgent",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "releaseTokenTransfer",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "upgradeMaster",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getUpgradeState",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "transferAgents",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "released",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "canUpgrade",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalUpgraded",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "releaseAgent",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "agent",
                        "type": "address"
                    }
                ],
                "name": "setUpgradeAgent",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "remaining",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isToken",
                "outputs": [
                    {
                        "name": "weAre",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "master",
                        "type": "address"
                    }
                ],
                "name": "setUpgradeMaster",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_symbol",
                        "type": "string"
                    },
                    {
                        "name": "_totalSupply",
                        "type": "uint256"
                    },
                    {
                        "name": "_decimals",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "Upgrade",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "agent",
                        "type": "address"
                    }
                ],
                "name": "UpgradeAgentSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Minted",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ]
    }
}