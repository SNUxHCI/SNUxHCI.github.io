import React from 'react';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';

const CoursePage = () => {
  return ( <>
    <SideNavigator/>
    <MainLayout title='COURSES'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default CoursePage;