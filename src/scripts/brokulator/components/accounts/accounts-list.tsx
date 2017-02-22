import * as React from 'react';
import { observer } from 'mobx-react';

import AccountsItem from './accounts-item';
import AccountsForm from './accounts-form';

import AccountModel from '../../models/AccountModel';

import store from '../../store';

function addAccount() {
  store.accounts.addAtBegin({ _editMode: true});
}

@observer
export default class AccountsList extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <h2>AccountsList</h2>
        <button className="btn btn-success" onClick={() => addAccount()}>
          Add account
        </button> 
        <ul className="list-unstyled">
          {store.accounts.all.map(account =>
            <li key={account.cid}>
              {account._editMode ?
                <AccountsForm account={account} />
                : <AccountsItem account={account} />}
            </li>
          )}
        </ul>
      </div>
    )
  }
}