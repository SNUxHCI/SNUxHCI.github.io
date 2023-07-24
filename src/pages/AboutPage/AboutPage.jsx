import React from 'react';
import styles from './AboutPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';


const AboutPage = () => {
  return ( <>
    <SideNavigator/>
    <MainLayout title='ABOUT'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default AboutPage;