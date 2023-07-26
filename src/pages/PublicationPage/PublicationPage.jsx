import React from 'react';
import styles from './PublicationPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

const PublicationPage = () => {
  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout title='PUBLICATIONS'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default PublicationPage;