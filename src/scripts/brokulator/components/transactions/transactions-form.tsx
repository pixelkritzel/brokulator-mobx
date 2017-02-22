import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';

function updateTransaction(transaction, target) {
  const { name, value } = target;
  const updateData = {};
  updateData[name] = value;
  transaction.update(updateData);
}

function leaveEditMode(transaction) {
  transaction.update({ _editMode: false });
}

function deleteTransaction(transaction) {
  transaction.delete();
}

@observer
export default class TransactionsForm extends React.Component<{ transaction }, {}> {
  render() {
    const { transaction } = this.props;
    return (
      <form onChange={(event) => updateTransaction(transaction, event.target)}>
        <div className="form-group">
          <label htmlFor="transactionName_{key}">Transaction name</label>
          <input type="text" className="form-control" id="transactionName_{transaction.cid}" placeholder="Name" name="name" defaultValue={transaction.name} />
        </div>
        <div className="form-group">
          <label htmlFor="transactionValue_{transaction.cid}">Transaction value</label>
          <input type="number" className="form-control" id="transactionValue_{transaction.cid}" placeholder="0" name="value" defaultValue={transaction.value} />
        </div>
        <div className="form-group">
          <label htmlFor="transactionAccountId_{transaction.cid}">Account</label>
          <select name="account_id"
                  id="transactionAccountId_{transaction.cid}"
                  defaultValue={transaction.account_id}>
            {!transaction.account ?
                <option>Please select an account</option>
              : void 0}
            {store.accounts.all.map(account =>
              <option key={account.cid}
                value={account.id}>
                {account.name}
              </option>)
            }
          </select>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary" onClick={() => leaveEditMode(transaction)}>
            <i className="fa fa-pencil" aria-hidden="true"></i>{" "}Done
          </button>
          <button type="button" className="btn btn-danger" onClick={() => deleteTransaction(transaction)}>
            <i className="fa fa-times" aria-hidden="true"></i>{" "}Delete
          </button>
        </div>
      </form>
    );
  }
}