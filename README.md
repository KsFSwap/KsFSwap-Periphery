![Ksfperiphery](https://github.com/KsFSwap/KsFSwap-Periphery/blob/master/KsFPeriphery.jpg) 

# KsfSwap Periphery

This repository contains the periphery smart contracts for the KsfSwap Protocol.
For the lower level core contracts, see the [KsfSwap-core](https://github.com/KsfSwap/KsfSwap-core)
repository.

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@KsfSwap/v3-periphery`
and import bytecode imported from artifacts located at
`@KsfSwap/v3-periphery/artifacts/contracts/*/*.json`.
For example:

```typescript
import {
  abi as SWAP_ROUTER_ABI,
  bytecode as SWAP_ROUTER_BYTECODE,
} from '@KsfSwap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all KsfSwap code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The KsfSwap v3 periphery interfaces are available for import into solidity smart contracts
via the npm artifact `@KsfSwap/v3-periphery`, e.g.:

```solidity
import '@KsfSwap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}

```
