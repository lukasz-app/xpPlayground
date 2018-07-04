import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import RX = require('reactxp');
import renderScene from './navigation/Router';
import { observer, inject } from 'mobx-react';
import withStoreProvider = require('./enhancers/withStoreProvider');
import NavigationStoreInterface = require('./stores/interfaces');
import RootStore = require('./stores/RootStore');

const styles = {
    // Standard navigator style should be an object. So we have to disable caching here.
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    }, false)
};

interface Props {
    navigationStore: NavigationStoreInterface.NavigationStoreInterface
}

@withStoreProvider(new RootStore())
@inject('navigationStore')
@observer
class App extends RX.Component<any, any> {
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
