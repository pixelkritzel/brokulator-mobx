import { observable } from 'mobx';

import ModelClass from '../../helper/ModelClass';

export interface AccountData {
  name: string,
  balance: number
}

export interface AccountModelInterface extends ModelClass{
  name: string,
  balance: number,
  _editMode: boolean
}

export default class AccountModel<AccountData> extends ModelClass {
  @observable name
  @observable balance
  @observable _editMode
}