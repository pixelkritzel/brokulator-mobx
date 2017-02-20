import * as React from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';

import AccountModel from "../../models/AccountModel";
import { AccountModelInterface, AccountData } from "../../models/AccountModel";


function updateAccountName(account: AccountModel<AccountData>) {
  const newAccountName = prompt('Rename the account', account.name);
  account.update({
    name: newAccountName
  });
};

function updateAccountBalance(account: AccountModel<AccountData>) {
  const newBalance = prompt('Enter the new account balance', account.balance.toString());
  account.update({
    balance: newBalance
  });
};

function enterEditMode(account: AccountModel<AccountData>) {
  account.setEditMode(true);
}

function deleteAccount(account: AccountModel<AccountData>) {
  account.delete(account);
}

@observer
class AccountItem extends React.Component<{ account: AccountModel<AccountData> }, {}> {
  render() {
    const { account } = this.props;
    return (<li key={account.cid}>
      <dl className="row">
        <dt className="col-sm-3">Name</dt>
        <dd className="col-sm-9" onDoubleClick={() => updateAccountName(account)}>{account.name}</dd>
        <dt className="col-sm-3">Balance</dt>
        <dd className="col-sm-9" onDoubleClick={() => updateAccountBalance(account)}>{account.balance}</dd>
      </dl>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={() => enterEditMode(account)}>
          <i className="fa fa-pencil" aria-hidden="true"></i>{" "}Edit
        </button>
        <button type="button" className="btn btn-danger" onClick={() => deleteAccount(account)}>
          <i className="fa fa-times" aria-hidden="true"></i>{" "}Delete
        </button>
      </div>
    </li>)
  }
}


export default AccountItem;