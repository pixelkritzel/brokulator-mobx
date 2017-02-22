import * as React from 'react';
import { observer } from 'mobx-react';

import AccountModel from '../../models/AccountModel';
import { AccountData } from '../../models/AccountModel';

function updateAccount(account: AccountModel<AccountData>, target) {
  const { name, value } = target;
  const updateData = {};
  updateData[name] = value;
  account.update(updateData);
}

function leaveEditMode(account: AccountModel<AccountData>) {
  account.update({ _editMode: false });
}

function deleteAccount(account: AccountModel<AccountData>) {
  account.delete();
}

@observer
export default class AccountForm extends React.Component<{ account: AccountModel<AccountData> }, {}> {
  render() {
    const { account } = this.props;
    return (
      <form onChange={(event) => updateAccount(account, event.target)}>
        <div className="form-group">
          <label htmlFor="accountName_{key}">Account name</label>
          <input type="text" className="form-control" id="accountName_{account.cid}" placeholder="Name" name="name" defaultValue={account.name} />
        </div>
        <div className="form-group">
          <label htmlFor="accountBalance_{account.cid}">Account balance</label>
          <input type="number" className="form-control" id="accountBalance_{account.cid}" placeholder="0" name="balance" defaultValue={account.balance} />
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary" onClick={() => leaveEditMode(account)}>
            <i className="fa fa-pencil" aria-hidden="true"></i>{" "}Done
          </button>
          <button type="button" className="btn btn-danger" onClick={() => deleteAccount(account)}>
            <i className="fa fa-times" aria-hidden="true"></i>{" "}Delete
          </button>
        </div>
      </form>
    )
  }

}