import React from 'react';
import styles from './AboutPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

import aboutImg from '../../assets/AboutImg/aboutImg.svg';


const AboutPage = () => {
  return ( <>
   <Header/>
    <SideNavigator/>
    <MainLayout title='WHO WE ARE'>
      <div className={styles.container}>
        <img src={aboutImg} alt="about" className={styles.aboutImg}/>
        <p className={styles.description}>
            We are the <b className={styles.bold}>Human-Computer Interaction Group </b>
            at Seoul National University, a multidisciplinary research consortium
            comprised of seven research labs from four distinct colleges.
        </p>
      </div>
    </MainLayout>
  </> );
}
 
export default AboutPage;