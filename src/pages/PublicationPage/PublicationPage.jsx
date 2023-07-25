import React from 'react';
import styles from './PublicationPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';

const PublicationPage = () => {
  return ( <>
    <SideNavigator/>
    <MainLayout title='PUBLICATIONS' tagtitle='Years'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default PublicationPage;