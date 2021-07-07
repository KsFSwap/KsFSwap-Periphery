import { abi as POOL_ABI } from '@KsfSwap/v3-core/artifacts/contracts/KsfSwapV3Pool.sol/KsfSwapV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { IKsfSwapV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IKsfSwapV3Pool {
  return new Contract(address, POOL_ABI, wallet) as IKsfSwapV3Pool
}
