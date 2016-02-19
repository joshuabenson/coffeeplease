import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

class Footer extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Home</Link>
          <span className={s.spacer}>·</span>
        </div>
      </div>
    );
  }
}

export default withStyles(Footer, s);
