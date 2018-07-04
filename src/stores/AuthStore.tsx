import { action, computed, observable } from 'mobx';
import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import * as Routes from './../navigation/Routes';
import * as interfaces from './interfaces'
export = class AuthStore implements 
interfaces.BaseChildStore, 
interfaces.AuthStoreInterface {
  rootStore: interfaces.RootStoreInterface;
  constructor(rootStore: interfaces.RootStoreInterface) {
    this.rootStore = rootStore;
  }
  clearStore(){
  }
}
