import React from 'react';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

import logoImg from '../../../assets/UI/logo.svg';
import snuImg from '../../../assets/UI/snu.svg';

const Header = () => {
  return ( <>
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <Link to='/' className={styles.logoLink}>
          <img src={logoImg} alt="logo" className={styles.logo}/>
        </Link>
        <img src={snuImg} alt="snu" className={styles.snu}/>
      </div>
    </div>
  </> );
}
 
export default Header;