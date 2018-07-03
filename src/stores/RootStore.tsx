// import AppStore from './AppStore';
// import AuthStore from './AuthStore';
import NavigationStore = require('./NavigationStore');

const navStore: any = NavigationStore;  

export = class RootStore {
  stores: {}
  constructor() {
    // this.appStore = new AppStore(this);
    // this.authStore = new AuthStore(this);
    this.stores = {
      // appStore: this.appStore,
      // authStore: this.authStore,
      navigationStore: new navStore(this),
    };
  }
}

