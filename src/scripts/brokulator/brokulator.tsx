import * as React from 'react';
import * as ReactDOM from 'react-dom';

import DevTools from 'mobx-react-devtools';

import AccountsList from './components/accounts/accounts-list';

const App = () => 
 <div>
  <h1>Brokulator</h1>
  <AccountsList />
  <DevTools />
 </div>

export default function startBrokulator() {
  const appEntry = document.getElementById('brokulator');
  ReactDOM.render(<App />, appEntry);
}