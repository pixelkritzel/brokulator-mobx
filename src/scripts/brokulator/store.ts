import { observable, useStrict } from 'mobx';

useStrict(true);

import accounts from './collections/accountsCollection';
import transactions from './collections/transactionsCollection';

export class Store {
  @observable accounts = accounts;
  @observable transactions = transactions;
}

const store = new Store();
window.store = store;
export default store;