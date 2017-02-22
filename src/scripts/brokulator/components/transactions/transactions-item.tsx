import * as React from 'react';
import { observer } from 'mobx-react';

function enterEditMode(transaction) {
  transaction.update({_editMode: true});
}

function deleteTransaction(transaction) {
  transaction.delete(transaction);
}

@observer
export default class TransactionsItem extends React.Component<{ transaction }, {}> {
  render() {
    const { transaction } = this.props;
    return(
      <div>
        <dl className="row">
          <dt className="col-sm-3">Name</dt>  
          <dd className="col-sm-9">{transaction.name}</dd>
          <dt className="col-sm-3">Value</dt>
          <dd className="col-sm-9">{transaction.value}</dd>
          <dt className="col-sm-3">Account</dt>
          <dd className="col-sm-9">{transaction.account ? transaction.account.name : <i>Not selected</i>}</dd>
        </dl>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={() => enterEditMode(transaction)}>
            <i className="fa fa-pencil" aria-hidden="true"></i>{" "}Edit
          </button>
          <button type="button" className="btn btn-danger" onClick={() => deleteTransaction(transaction)}>
            <i className="fa fa-times" aria-hidden="true"></i>{" "}Delete
          </button>
        </div>
      </div>
    )
  }
}
