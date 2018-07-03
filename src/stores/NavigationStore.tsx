// import { NavigationActions, StackActions } from 'react-navigation';
import { action, computed, observable } from 'mobx';
import * as NavigationStoreInterface from './interface/NavigationStoreInterface';
import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';

function getCurrentState(state: any): any {
  const childRoute = state.routes[state.index];
  if (childRoute.routes) {
    return getCurrentState(childRoute);
  }
  return childRoute;
}
function getPrevState(state:any):any {
  const childRoute = state.routes[state.index];
  const childRoutePrev = state.index === 0 ? {} : state.routes[state.index - 1];
  if (childRoute.routes) {
    return getPrevState(childRoute);
  }
  return childRoutePrev;
}


import MainPanel = require('./../MainPanel');
import SecondPanel = require('../SecondPanel');

enum NavigationRouteId {
    MainPanel,
    SecondPanel
}



class NavigationStore implements NavigationStoreInterface.NavigationStoreInterface {
  @observable navigator: any = null;
  @observable currentRouteName: string = '';
  @observable previousRouteName: string = ''
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @action.bound
  setNavigator = (navigator: Navigator): void => {
    console.log('Set nav: ', navigator)
    this.navigator = navigator;
    this.resetAndNavigate('A');
  }

  goBack = (key: string) => {
      this.navigator.pop();
  }

  navigate = (routeName: string) => {
    this.navigator.push({
      // routeId: NavigationRouteId.SecondPanel,
      // sceneConfigType: Types.NavigatorSceneConfigType.FloatFromRight
  });
    this.currentRouteName = routeName;
  }

  resetAndNavigate = (routeName: string) => {
    this.navigator.immediatelyResetRouteStack([{
      routeId: NavigationRouteId.MainPanel,
      sceneConfigType: Types.NavigatorSceneConfigType.Fade
  }]);
    this.currentRouteName = routeName;
  }


  getCurrentRouteName = () =>
    this.navigator && getCurrentState(this.navigator.state.nav).routeName;


  getPrevRouteName = () => getPrevState(this.navigator.state.nav).routeName;

  @action
  clearStore = () => {
    // this.navigator = null;
  }
}

export = NavigationStore;
