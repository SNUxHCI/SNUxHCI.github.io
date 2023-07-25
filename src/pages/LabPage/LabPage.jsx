import React from 'react';
import styles from './LabPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';


const LabPage = () => {

  const description = 'We are the Human-Computer Interaction Group at Seoul National University, a multidisciplinary research consortium comprised of seven research labs from three distinct colleges.';
  
  return ( <>
    <SideNavigator/>
    <MainLayout title='LABS' description={description} tagtitle="Department">
      {/* CONTENTS HERE */}
    </MainLayout>
  </> );
}
 
export default LabPage;