import { action, observable } from 'mobx';
import * as assign from 'lodash.assign';

import getId from './getId';
import CollectionClass from './CollectionClass'

export default class ModelClass {
  
  cid: number

  parent: CollectionClass

  @action update(data) {
    assign(this, data);
    console.log(this)
  }

  @action delete(account) {
    this.parent.deleteItem(this);
  } 
  
  constructor(initialData?) {
    if (initialData) {
      this.update(initialData);
    }
    this.cid = getId();
  }
}