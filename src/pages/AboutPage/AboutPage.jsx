import React from 'react';
import styles from './AboutPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';


const AboutPage = () => {
  return ( <>
   <Header/>
    <SideNavigator/>
    {/* <MainLayout title='ABOUT'> */}
      {/* CONTENTS HERE */}
    {/* </MainLayout> */}
  </> );
}
 
export default AboutPage;