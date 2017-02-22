import * as React from 'react';
import * as ReactDOM from 'react-dom';

import DevTools from 'mobx-react-devtools';

import AccountsList from './components/accounts/accounts-list';
import TransactionsList from './components/transactions/transactions-list';

const App = () => 
 <div>
  <h1>Brokulator</h1>
  <div className="row">
    <div className="col-sm-6">
      <AccountsList />
    </div>
    <div className="col-sm-6">
      <TransactionsList />
    </div>
  </div>
  
  <DevTools />
 </div>

export default function startBrokulator() {
  const appEntry = document.getElementById('brokulator');
  ReactDOM.render(<App />, appEntry);
}