import { observable } from 'mobx';

import Collection from '../../helper/CollectionClass';
import AccountModel, { AccountData } from '../models/AccountModel';

const accountsData = [{
  name: 'Geldspeicher',
  balance: 0,
  id: 0
},{
  name: 'Unter der Matratze',
  balance: 0,
  id: 1
},{
  name: 'Tante Erna',
  balance: 0,
  id: 2
},{
  name: 'Bei der Mafia',
  balance: 0,
  id: 3
}];

export class Accounts extends Collection {
  model = AccountModel
}

export default new Accounts(accountsData);