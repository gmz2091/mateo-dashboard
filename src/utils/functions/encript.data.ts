/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { EncryptStorage } from 'encrypt-storage';
import envirometns from '../envitoments';

const { secretKey } = envirometns;

export default new EncryptStorage(secretKey, {
  prefix: '_usr_',
});
