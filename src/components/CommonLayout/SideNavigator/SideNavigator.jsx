import React from 'react';
import styles from './SideNavigator.module.scss';

import logoImg from '../../../assets/UI/logo.svg';
import arrowImg from '../../../assets/UI/arrow.svg';

const SideNavigator = () => {
  const navList = ['about', 'news', 'labs', 'publications', 'courses', 'community'];

  return ( <>
    <div className={styles.sideContainer}>
      <div className={styles.whiteBackground}>
        <img src={logoImg} alt="logo" className={styles.logo}/>
        <div className={styles.navigatorContainer}>
          {navList.map((nav, i) =>
            <div className={styles.navWrapper}>
              <img src={arrowImg} alt="arrow" className={styles.arrow}/>
              <p className={styles.navItem}>{nav.toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </> );
}
 
export default SideNavigator;