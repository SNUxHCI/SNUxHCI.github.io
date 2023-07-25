import React from 'react';
import styles from './CoursePage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';

const CoursePage = () => {
  return ( <>
    <SideNavigator/>
    <MainLayout title='COURSES' tagtitle='Filter by:'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default CoursePage;