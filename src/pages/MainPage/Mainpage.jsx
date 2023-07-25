import React from 'react';
import styles from './MainPage.module.scss';

import mainImg from '../../assets/UI/mainImg.png';
import UXImg from '../../assets/UI/mainUX.svg';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';

const MainPage = () => {
  return ( <>
    <SideNavigator/>
    <main>
      <div className={styles.imgContainer}>
        <img src={mainImg} alt="mainImg" className={styles.mainImg}/>
        <img src={UXImg} alt="UX" className={styles.UXImg}/>
      </div>
    </main>
  </> );
}
 
export default MainPage;