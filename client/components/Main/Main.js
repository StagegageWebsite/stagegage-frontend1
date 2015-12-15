
import React from 'react';
import styles from './main.less';
import FacebookLogin from '../FacebookLogin/FacebookLogin';

export default class Main extends React.Component {

  render() {
    return (<div><FacebookLogin fb={window.FB} /></div>);
  }
}
