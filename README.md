# makefun-coin-launch-01: Race to launch a real coin on Solana

Fully autonomous Solana token launch submission for the make.fun $1,000 bounty (`makefun-coin-launch-01`).

## Token Details
- **Token Name**: make.fun Ghost
- **Symbol**: MFUN
- **Mint Address**: `DDLPBahKiLiqcBogoRKzgPxcet6zzmay24KNXhmmZcEy`
- **Creation Signature**: `4jJDmshfyVo7wHiGmg4FA5hMe8WcsfsEnb8dLGdzLp9gzHoRjfWkTpkomYg4GSKJ3oRNKGmYUr1NmuVGytH3Wtx5`
- **Launchpad**: pump.fun on Solana Mainnet
- **Mascot Logo**: Official make.fun Ghost (`https://make.fun/press/mark-1024.png`)
- **Metadata Description**: `made for make.fun $1000 bounty`

## Repository Architecture
- `main.ts`: Program entrypoint (Node 22 ES module) that validates and delivers `LAUNCH.json` to `/output/LAUNCH.json`.
- `LAUNCH.json`: Contains the on-chain mint and transaction signature.
- `metadata.json`: Metaplex-compliant token metadata hosted permanently.
- `.makefun/owner.json`: Proof of ownership linking to user wallet `Cn1pEvFKkHHW6S9Qp96URXXL2fQQ2vCVAQF5x73zqJ5M`.
