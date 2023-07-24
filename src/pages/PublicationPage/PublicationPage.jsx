import React from 'react';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';

const PublicationPage = () => {
  return ( <>
    <SideNavigator/>
    <MainLayout title='PUBLICATIONS'>
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default PublicationPage;