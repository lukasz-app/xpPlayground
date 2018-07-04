import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import * as Routes from './../navigation/Routes';
export interface RootStoreInterface { 
  stores: {
    navigationStore: NavigationStoreInterface,
    appStore: AppStoreInterface,
    authStore: AuthStoreInterface,
  }
}

export interface BaseChildStore {
  clearStore: ()=>void,
  rootStore: RootStoreInterface
}

export interface NavigationStoreInterface { 
  setNavigator: (navigator: Navigator)=>void,
  navigate: (routeId: Routes.NavigationRouteId)=>void,
  goBack: (key:string)=>void,
  initNavigation: ()=>void,
  navigator: Navigator,
  currentRouteName: string
}

export interface AppStoreInterface { 
  showAlert:()=>void,
}

export interface AuthStoreInterface { 
  
}
