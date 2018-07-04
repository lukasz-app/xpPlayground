// import { NavigationActions, StackActions } from 'react-navigation';
import { action, computed, observable } from 'mobx';
import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import * as Routes from './../navigation/Routes';
import * as interfaces from './interfaces'

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
class NavigationStore implements interfaces.BaseChildStore, interfaces.NavigationStoreInterface {
  @observable navigator: Navigator = null;
  @observable currentRouteName: string = '';
  @observable previousRouteName: string = '';
  rootStore: interfaces.RootStoreInterface;

  constructor(rootStore: interfaces.RootStoreInterface) {
    this.rootStore = rootStore;
  }

  @action.bound
  setNavigator = (navigator: Navigator): void => {
    console.log('Set nav: ', navigator)
    this.navigator = navigator;
    this.initNavigation();
  }

  goBack = (key: string) => {
      this.navigator.pop();
  }

  navigate = (routeId: Routes.NavigationRouteId) => {
    console.log('navigate', routeId);
    this.navigator.push({
      routeId: routeId,
      sceneConfigType: Types.NavigatorSceneConfigType.FloatFromRight
  });
    this.currentRouteName = `${routeId}`;
  }

  resetAndNavigate = () => {
    this.navigator.immediatelyResetRouteStack([{
      routeId: Routes.NavigationRouteId.Home,
      sceneConfigType: Types.NavigatorSceneConfigType.Fade
  }]);
    this.currentRouteName = 'Home';
  }

  initNavigation = ()=>{
    this.navigator.immediatelyResetRouteStack([{
      routeId: Routes.NavigationRouteId.Splash,
      sceneConfigType: Types.NavigatorSceneConfigType.Fade
  }]);
  }


  // getCurrentRouteName = () =>
  //   this.navigator && getCurrentState(this.navigator.state.nav).routeName;


  // getPrevRouteName = () => getPrevState(this.navigator.state.nav).routeName;

  @action
  clearStore = () => {
    // this.navigator = null;
  }
}

export = NavigationStore;
