/**
 * Autonomous Solana Token Launch Harness for make.fun bounty (makefun-coin-launch-01)
 *
 * This entrypoint is executed in Node.js 22 within a sandboxed environment.
 * Its purpose is to read and validate LAUNCH.json, verify its structure,
 * and copy it into the required /output/LAUNCH.json destination for grading.
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Define directories for sandbox harness execution
const botDirectory = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

interface LaunchConfig {
  mint: string;
  create_signature: string;
}

function validateAndDeliverLaunch(): void {
  const launchPath = join(botDirectory, 'LAUNCH.json');
  if (!existsSync(launchPath)) {
    console.error(`Missing LAUNCH.json in bot directory: ${botDirectory}`);
    process.exit(1);
  }

  const rawContent = readFileSync(launchPath, 'utf-8');
  let config: LaunchConfig;
  try {
    config = JSON.parse(rawContent) as LaunchConfig;
  } catch (err) {
    console.error(`Invalid JSON syntax in ${launchPath}: ${(err as Error).message}`);
    process.exit(1);
  }

  // Validate mint address format (base58, 32-44 characters)
  if (!config.mint || typeof config.mint !== 'string' || config.mint.length < 32 || config.mint.length > 44) {
    console.error(`Invalid mint address format: ${config.mint}`);
    process.exit(1);
  }

  // Validate create signature format (base58 Solana signature, 64-88 characters)
  if (!config.create_signature || typeof config.create_signature !== 'string' || config.create_signature.length < 64 || config.create_signature.length > 88) {
    console.error(`Invalid create_signature format: ${config.create_signature}`);
    process.exit(1);
  }

  // Ensure output directory exists
  mkdirSync(outputDirectory, { recursive: true });

  // Write validated configuration to the target destination
  const destinationPath = join(outputDirectory, 'LAUNCH.json');
  writeFileSync(destinationPath, JSON.stringify(config, null, 2), 'utf-8');

  // Completed successfully without writing any non-essential stdout
  return;
}

validateAndDeliverLaunch();
