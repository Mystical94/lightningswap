# LightningSwap

A one point destination to swap your cryptos on ThunderCore blockchain

## LightningSwap Interface for ThunderCore(Testnet) Network

An open source interface for LightningSwap -- a protocol for decentralized exchange on ThunderCore.

Enabling users to:

- Add and remove their liquidity positions on LightningSwap protocol
- Swap tokens on LightningSwap protocol

### ☄️ What's next?
- More features will be introduced, such as farming, staking, and limit orders to make LightningSwap more accessible to everyone and a common destination for everyone's needs.
- Creating a fully community-driven protocol in which the community votes on all protocol-related decisions.
- Making it live on the ThunderCore Blockchain (coming very soon 😉)

### 💪 Deployed Smart Contract Addresses (ThunderCore Testnet)
- Factory Contract: [0xe7f7067c9ecab27c5f7f13e02b13ed50931f6d0f](https://explorer-testnet.thundercore.com/address/0xe7F7067C9ECAB27c5F7f13E02b13eD50931f6D0f/transactions)
- Router Contract: [0x90d4e9eb792602aa7a7506b477b878307c35e24a](https://explorer-testnet.thundercore.com/address/0x90d4e9eb792602aa7a7506b477b878307c35e24a/transactions)
- W5ire Contract: [0x3221ce4ade9a9564b34992a6d9dd35e38d3884c9](https://explorer-testnet.thundercore.com/address/0x3221ce4ade9a9564b34992a6d9dd35e38d3884c9/transactions)
- Multicall Contract: [0x0c0d088a6fe7c65754d821eb94bce29c2cfb0d1d](https://explorer-testnet.thundercore.com/address/0x0c0d088a6fe7c65754d821eb94bce29c2cfb0d1d/transactions)

### 💻 Deploying the LightningSwap on local machine

Clone the repository

move into the thundercore Directory for accessing LightningSwap on ThunderCore(Testnet) Blockchain

```sh
cd thundercore
```
or

move into the 5ire Directory for accessing LightningSwap on 5ire(Testnet) Blockchain

```sh
cd 5ire
```


After moving into the desired blockchin directory move into the UserInterface Directory

```sh
cd UserInterface
```

install dependencies using **yarn** or **npm**

**having some dependency version problems in yarn, so advised to use npm commands instead**

```sh
yarn

or

npm install
```
If using Windows then run these two commmands after npm install

```sh
rm -r ./node_modules/@uniswap/sdk
```
And Then this command

```sh
cp -r ./forks/@uniswap/sdk ./node_modules/@uniswap/sdk
```

start the development server
```sh
yarn start

or

npm start
```

build with production mode
```sh
yarn build

or

npm run build
```

### 🚫 License
This repository includes an [unlicensed](http://unlicense.org/) statement.