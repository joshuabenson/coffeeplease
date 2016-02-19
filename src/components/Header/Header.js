import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Link className={s.brand} to="/">
            <img src={require('./logo-small.png')} width="80" height="80" alt="React" />
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Coffee Please</h1>
            <p className={s.bannerDesc}>Getting you your daily cup</p>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
