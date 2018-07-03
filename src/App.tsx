/*
* This file demonstrates a basic ReactXP app.
*/
// This example uses ExperimentalNavigation on iOS and Android
import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import RX = require('reactxp');
import renderScene from './navigation/Router';
import { observer, inject } from 'mobx-react';
import withStoreProvider = require('./enhancers/withStoreProvider');
import NavigationStoreInterface = require('./stores/interface/NavigationStoreInterface');

const styles = {
    // Standard navigator style should be an object. So we have to disable caching here.
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    }, false)
};

interface Props {
    navigationStore: NavigationStoreInterface.NavigationStoreInterface
}

@withStoreProvider('')
@inject('navigationStore')
@observer
class App extends RX.Component<any, any> {
    private _navigator: Navigator;

    componentDidMount() {
        // this._navigator.immediatelyResetRouteStack([{
        //     routeId: NavigationRouteId.MainPanel,
        //     sceneConfigType: Types.NavigatorSceneConfigType.Fade
        // }]);
    }

    render() {
        const  {navigationStore}  = this.props;
        return (
            <Navigator
                ref={ navigationStore.setNavigator }
                renderScene={renderScene}
                cardStyle={ styles.navCardStyle }
                delegateSelector={ DelegateSelector }
            />
        );
    }
}

export = App;
