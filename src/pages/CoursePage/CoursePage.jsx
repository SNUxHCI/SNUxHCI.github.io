import React from 'react';
import styles from './CoursePage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

const CoursePage = () => {
  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout title='COURSES'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default CoursePage;