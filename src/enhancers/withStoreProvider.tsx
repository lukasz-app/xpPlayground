import  { Component, Props } from 'react';
import { Provider } from 'mobx-react';
import RX = require('reactxp');
import RootStore = require('../stores/RootStore');

import App = require('../App');
const rootStore: any = RootStore;
const withStoreProvider = (any:any) => (WrappedComponent: any): any =>
  class StoreProvider extends RX.Component<{}, null> {
    rootStore: any;
    constructor(props:any,context:any) {
      super(props,context);
      this.rootStore = new rootStore();
    }
    render() {
      return (
        <Provider {...this.rootStore.stores}>
          <WrappedComponent {...this.props} />
        </Provider>);
    }
  };

export = withStoreProvider;
