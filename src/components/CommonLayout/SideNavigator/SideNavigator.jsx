import React from 'react';

import styles from './SideNavigator.module.scss';

import logoImg from '../../../assets/UI/logo.svg';
import arrowImg from '../../../assets/UI/arrow.svg';
import arrowBlueImg from '../../../assets/UI/arrow_blue.svg';
import StyledLink from '../../StyledLink';
import { useLocation } from 'react-router-dom';

const SideNavigator = () => {
  const navList = ['about', 'news', 'labs', 'publications', 'courses', 'community'];

  const currentLocation = useLocation().pathname.split("/")[1];;

  return ( <>
    <div className={styles.sideContainer}>
      <div className={styles.whiteBackground}>
        <StyledLink to='/'>
          <img src={logoImg} alt="logo" className={styles.logo}/>
        </StyledLink>
        <div className={styles.navigatorContainer}>
          {navList.map((nav, i) =>
            <StyledLink to={`/${nav}`} key={i}>
              <div className={styles.navWrapper}>
                <img src={nav==currentLocation? arrowBlueImg : arrowImg} alt="arrow" className={styles.arrow}/>
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