import React from 'react';

import styles from './SideNavigator.module.scss';

import logoImg from '../../../assets/UI/logo.svg';
import arrowImg from '../../../assets/UI/arrow.svg';
import StyledLink from '../../StyledLink';

const SideNavigator = () => {
  const navList = ['about', 'news', 'labs', 'publications', 'courses', 'community'];

  return ( <>
    <div className={styles.sideContainer}>
      <div className={styles.whiteBackground}>
        <StyledLink to='/'>
          <img src={logoImg} alt="logo" className={styles.logo}/>
        </StyledLink>
        <div className={styles.navigatorContainer}>
          {navList.map((nav, i) =>
            <StyledLink to={`/${nav}`}>
              <div className={styles.navWrapper}>
                <img src={arrowImg} alt="arrow" className={styles.arrow}/>
                <p className={styles.navItem}>{nav.toUpperCase()}</p>
              </div>
            </StyledLink>
          )}
        </div>
      </div>
    </div>
  </> );
}
 
export default SideNavigator;