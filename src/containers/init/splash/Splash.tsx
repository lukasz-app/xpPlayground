import RX = require('reactxp');
import  { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styles from './styles';
import * as Routes from '../../../navigation/Routes';


@inject('navigationStore')
@observer
class Splash extends RX.Component<any,any> {

componentDidMount() {
  setTimeout(() => {
    this.props.navigationStore.navigate(Routes.NavigationRouteId.Home)
  },2000)
};



render() {
  return (
    <RX.View useSafeInsets style={styles.container} >
      {/* <StatusBar backgroundColor="transparent" barStyle="light-content" /> */}
      <RX.Text style={{color: 'white'}}>
        {'This is splash'}
      </RX.Text>
    </RX.View>
  );
}
}

export default Splash;

// App.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }).isRequired,
// };

// App.wrappedComponent.propTypes = {
//   authStore: PropTypes.shape().isRequired,
// };
