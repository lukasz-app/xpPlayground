import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import RX = require('reactxp');
// import { Home, Splash,Auth } from './../containers';
import MainPanel = require('../MainPanel');
import SecondPanel  = require('../SecondPanel');

enum NavigationRouteId {
    MainPanel,
    SecondPanel
}

export default function renderScene(navigatorRoute: Types.NavigatorRoute){

   
        switch (navigatorRoute.routeId) {

            case NavigationRouteId.MainPanel:
            return <MainPanel onPressNavigate={ this._onPressNavigate } />;
            
            case NavigationRouteId.SecondPanel:
            return <SecondPanel onNavigateBack={ this._onPressBack } />;
            
        }
        
        return null;
    
}