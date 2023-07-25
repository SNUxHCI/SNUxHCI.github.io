import React from 'react';
import styles from './NewsPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';

const NewsPage = () => {
  return ( <>
    <SideNavigator/>
    <MainLayout title='NEWS' tagtitle='Years'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default NewsPage;