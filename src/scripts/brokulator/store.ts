import { observable, useStrict } from 'mobx';

useStrict(true);

import accounts from './collections/accountsCollection';

export class Store {
  @observable accounts = accounts;
}

export default new Store();