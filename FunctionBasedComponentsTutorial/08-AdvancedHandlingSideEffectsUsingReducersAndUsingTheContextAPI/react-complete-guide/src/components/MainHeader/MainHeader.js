import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation /*DOESN'T NEED USING CONTEXT isLoggedIn={props.isAuthenticated} onLogout={props.onLogout}*/ />
    </header>
  );
};

export default MainHeader;