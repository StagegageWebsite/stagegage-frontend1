import React from 'react';
import styles from './main.less';
import { Link } from 'react-router';
import '../../config/routes';

export default class Main extends React.Component {

  render() {

    return (
      <div>
        <Link to="home">Home</Link>
        {this.props.children}
      </div>)
  }

}
