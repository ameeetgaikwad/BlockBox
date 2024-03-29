## Getting Started

This is an NFT memberships marketplace, facilitating creators in minting and listing NFT memberships that unlock various benefits for buyers.

## Working explained.

- When you create a membership, you call call `Factory.sol`, which deploys a `Membership.sol` which is a NFT contract. Now you have created your Membership and user will be able to buy it.

## Technologies Used

- NextJs, TailwindCSS, DaisyUI, Solidity, Typescript, MongoDB, Mongoose.

## Why the certain technologies?

- DaisyUI: Because the components are highly customizable and are less opinionated.

## Tradeoffs / What would I do differently if I have more time

- I would have a middleware contract `Controller.sol`. Rather than users directly interacting with the main NFT contract when they want to buy an membership, they will interact with this `Controller.sol` contract and this contract will buy the NFT for them.
- All the data you see on the UI regarding the NFT it is redering offchain. I've stored the data in a database (mongoDB). I can render all the data from onchain as well, but was trying things out differently so did it this way. And will use multicall to get all the NFTs.
- I would also add debounce to the search feature. When I render data from on chain.

## Contract addresses

- `Factory.sol`:`0x466848Cc475fbb9b922a5c95E4306f79c1B00497`
