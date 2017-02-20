import { action, observable } from 'mobx';

import ModelClass from '../../helper/ModelClass';

export interface AccountData {
  name: string,
  balance: Number
}

export interface AccountModelInterface extends ModelClass{
  name: string,
  balance: number,
  editMode: boolean
}

export default class AccountModel<AccountData> extends ModelClass {
  @observable name
  @observable balance
  @observable _editMode

  @action setEditMode(yesNo: Boolean) {
    this._editMode = yesNo;
  }
}