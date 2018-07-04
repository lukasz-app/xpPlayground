// import AppStore from './AppStore';
// import AuthStore from './AuthStore';
import AppStore = require('./AppStore');
import AuthStore = require('./AuthStore');
import NavigationStore = require('./NavigationStore');
import * as Interfaces from './interfaces'

export = class RootStore implements Interfaces.RootStoreInterface {
  stores: {
    appStore: Interfaces.AppStoreInterface,
    authStore: Interfaces.AuthStoreInterface
    navigationStore: Interfaces.NavigationStoreInterface,
  };
  constructor() {
    this.stores = {
      appStore: new AppStore(this),
      authStore: new AuthStore(this),
      navigationStore: new NavigationStore(this),
    };
  }
}

