import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import RX = require('reactxp');
// import { Home, Splash,Auth } from './../containers';
import Home from './../containers/app/home/Home';
import Splash from './../containers/init/splash/Splash';
import Auth from './../containers/auth/auth/Auth';
// import MainPanel = require('../MainPanel');
// import SecondPanel  = require('../SecondPanel');
import * as Routes from "./Routes";



export default function renderScene(navigatorRoute: Types.NavigatorRoute){
        switch (navigatorRoute.routeId) {
            case Routes.NavigationRouteId.Splash:
            return <Splash />;
            case Routes.NavigationRouteId.Home:
            return <Home />;
        }
        return null;
}