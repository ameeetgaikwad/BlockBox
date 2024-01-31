## Getting Started

This is an NFT memberships marketplace, facilitating creators in minting and listing NFT memberships that unlock various benefits for buyers.

## Technologies Used

- NextJs, TailwindCSS, DaisyUI, Solidity, Typescript, MongoDB, Mongoose.

## Why the certain technologies?

- DaisyUI: Because the components are highly customizable and are less opinionated.

## Working explained.

- When you create a membership, you call call `Factory.sol`, which deploys a `Membership.sol` which is a NFT contract. Now you have created your Membership and user will be able to buy it.

## Tradeoffs/What would I do differently if I have more time

- I would have a middleware contract `Controller.sol`. Rather than users directly interacting with the main NFT contract when they want to buy an membership, they will interact with this `Controller.sol` contract and this contract will buy the NFT for them.
- All the data you see on the UI regarding the NFT it is redering offchain. I've stored the data in a database (mongoDB). I can render all the data from onchain as well, but as the assignment mentioned to showcase Database skills as well so I did this way.
