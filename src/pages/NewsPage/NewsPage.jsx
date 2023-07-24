import React from 'react';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';

const NewsPage = () => {
  return ( <>
    <SideNavigator/>
    <MainLayout title='NEWS'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default NewsPage;