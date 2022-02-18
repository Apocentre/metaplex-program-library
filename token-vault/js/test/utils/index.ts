import test from 'tape';
import { AddressLabels } from '@metaplex-foundation/amman';

import debug from 'debug';
import { VAULT_PROGRAM_ADDRESS } from '../../src/mpl-token-vault';

export * from './accounts';
export * from './asserts';
export * from './token';
export * from './transactions';
export * from './vault-asserts';

export const logError = debug('vault:test:error');
export const logInfo = debug('vault:test:info');
export const logDebug = debug('vault:test:debug');
export const logTrace = debug('vault:test:trace');

const persistLabelsPath = process.env.ADDRESS_LABEL_PATH;
const knownLabels = {
  [VAULT_PROGRAM_ADDRESS]: 'TokenVault',
};

export const addressLabels = new AddressLabels(knownLabels, logDebug, persistLabelsPath);

export function killStuckProcess() {
  test.onFinish(() => process.exit(0));
}
