import { observable, action } from 'mobx';

import ModelClass from './ModelClass';

export default class Collection {

  @observable all: any[] = [];

  model = ModelClass;

  constructor(initialData?) {
    // Wait for applying initial data until object assembling is done
    setTimeout(() => this.add(initialData))
  }

  @action add = (newModel) => {
    if (Array.isArray(newModel)) {
      newModel.forEach(item => this.add(item));
      return;
    }
    if (newModel instanceof this.model) {
      newModel.parent = this;
      this.all.push(newModel)
    } else {
      const newModelInstance = new this.model(newModel);
      newModelInstance.parent = this
      this.all.push(newModelInstance);
    }
  }

  @action addAtBegin = (newModel) => {
    if (Array.isArray(newModel)) {
      newModel.forEach(item => this.add(item));
      return;
    }
    if (newModel instanceof this.model) {
      newModel.parent = this;
      this.all.unshift(newModel)
    } else {
      const newModelInstance = new this.model(newModel);
      newModelInstance.parent = this
      this.all.unshift(newModelInstance);
    }
  }

  @action deleteItem(item) {
    const index = this.all.indexOf(item);
    if (index > -1) {
      this.all.splice(index, 1);
    }
  }
}