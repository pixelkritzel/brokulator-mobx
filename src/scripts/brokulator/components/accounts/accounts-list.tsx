import * as React from 'react';
import { observer } from 'mobx-react';

import AccountItem from './account-item';
import AccountForm from './account-form';


import store from '../../store';

const AccountsList = observer(() =>
<div>
  <h2>AccountsList</h2>
  <ul className="list-unstyled">
    { store.accounts.all.map( account => 
      account._editMode ?
        <AccountForm key={account.cid} account={ account } />
      : <AccountItem key={account.cid} account={ account } />
    )}
  </ul>
</div>)

export default AccountsList;