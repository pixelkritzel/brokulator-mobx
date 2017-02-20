import { observable } from 'mobx';

import Collection from '../../helper/CollectionClass';
import AccountModel, { AccountData } from '../models/AccountModel';

type InitialCollectionData = Array<AccountData> | AccountData;

const accountsData = [{
  name: 'Geldspeicher',
  balance: 0
},{
  name: 'Unter der Matratze',
  balance: 0
},{
  name: 'Tante Erna',
  balance: 0
},{
  name: 'Bei der Mafia',
  balance: 0
}];

export class Accounts extends Collection {
  model = AccountModel
}

export default new Accounts(accountsData);