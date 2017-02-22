import { action, observable, computed } from 'mobx';
import * as find from 'lodash.find';

import ModelClass from '../../helper/ModelClass';
import store from '../store';

export interface TransactionData {
  name: string,
  value: number,
  account_id: number
}

export interface TransactionModelInterface extends ModelClass{
  name: string,
  balance: number,
  _editMode: boolean,
  account_id: number
}

export default class TransactionModel extends ModelClass {
  @observable name
  @observable value
  @observable _editMode
  @observable account_id

  @computed get account() {
    return find(store.accounts.all, account => account.id === parseInt(this.account_id, 10))
  }
}