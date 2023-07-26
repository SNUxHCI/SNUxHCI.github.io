import React from 'react';
import styles from './LabPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

const LabPage = () => {
  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout title='LABS'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default LabPage;