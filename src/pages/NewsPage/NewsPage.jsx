import React from 'react';
import styles from './NewsPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

const NewsPage = () => {
  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout title='NEWS'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default NewsPage;