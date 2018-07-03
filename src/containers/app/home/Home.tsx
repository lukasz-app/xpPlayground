import RX = require('reactxp');
import { observer, inject } from 'mobx-react';
import styles from './styles';


@inject('navigationStore')
@observer
class Home extends RX.Component<any,any> {

render() {
  return (
    <RX.View style={styles.container} >
      {/* <StatusBar backgroundColor="transparent" barStyle="light-content" /> */}
      <RX.Text>
        {'APP'}
      </RX.Text>
    </RX.View>
  );
}
}

export default Home;

// App.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }).isRequired,
// };

// App.wrappedComponent.propTypes = {
//   authStore: PropTypes.shape().isRequired,
// };
