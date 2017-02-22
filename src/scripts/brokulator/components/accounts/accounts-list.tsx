import * as React from 'react';
import { observer } from 'mobx-react';

import AccountsItem from './accounts-item';
import AccountsForm from './accounts-form';


import store from '../../store';

const AccountsList = observer(() =>
<div>
  <h2>AccountsList</h2>
  <ul className="list-unstyled">
    { store.accounts.all.map( account => 
      <li key={account.cid}>
        { account._editMode ?
            <AccountsForm account={ account } />
          : <AccountsItem account={ account } /> }
      </li>
    )}
  </ul>
</div>)

export default AccountsList;