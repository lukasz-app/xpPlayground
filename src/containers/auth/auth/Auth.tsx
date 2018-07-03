import RX = require('reactxp');
import  { Component } from 'react';
import { observer, inject } from 'mobx-react';


@inject('navigationStore')
@observer
class Auth extends RX.Component<any,any> {

render() {
  return (
    <RX.View style={{flex: 1, alignItems: 'center',justifyContent:'center'}} >
      <RX.Text>
        {'Auth'}
        </RX.Text>
    </RX.View>
  );
}
}

export default Auth;

