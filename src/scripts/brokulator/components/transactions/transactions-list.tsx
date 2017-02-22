import * as React from 'react';
import { observer } from 'mobx-react';

import TransactionItem from './transactions-item';
import TransactionForm from './transactions-form';

import store from '../../store';


@observer
export default class TransactionsList extends React.Component<{}, {}> {
  render() {
    console.log(store.transactions)
    return(
      <section>
        <h2>TransactionsList</h2>
        <ul className="list-unstyled">
          { store.transactions.all.map( transaction => 
            <li key={transaction.cid}>
              { transaction._editMode ?
                  <TransactionForm transaction={ transaction } />
                : <TransactionItem transaction={ transaction } /> }
            </li>
          )}
        </ul>
      </section>
      
    )
  }
}