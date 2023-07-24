import React from 'react';
import styles from './AboutPage.module.scss';


import bannerImg from '../../assets/UI/bannerImg.png';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';


const AboutPage = () => {
  return ( <>
    <SideNavigator/>
    <main>
      <img src={bannerImg} alt="banner" />
    </main>
  </> );
}
 
export default AboutPage;