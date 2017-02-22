import CollectionClass from '../../helper/CollectionClass';
import TransactionModel, { TransactionData } from '../models/TransactionModel';

const transactionData = [{
  name: 'Schokolade',
  value: 1,
  account_id: 2
}];

export class Transactions extends CollectionClass {
  model = TransactionModel
}

export default new Transactions(transactionData);