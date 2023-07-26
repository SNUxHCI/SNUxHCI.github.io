import React from 'react';
import styles from './MainPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

const MainPage = () => {
  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default MainPage;