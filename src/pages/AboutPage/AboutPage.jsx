import React from 'react';
import styles from './AboutPage.module.scss';


import bannerImg from '../../assets/UI/bannerImg.png';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';


const AboutPage = () => {
  return ( <>
    <SideNavigator/>
    <main>
      <img src={bannerImg} alt="banner" />
      <article>
        <div className={styles.articleHeader}>
          <h1 className={styles.headerTitle}>LABS</h1>
          <p className={styles.headerDescription}>
            We are the Human-Computer Interaction Group at Seoul National University, a multidisciplinary research consortium comprised of seven research labs from three distinct colleges.
          </p>
        </div>

      </article>
    </main>
  </> );
}
 
export default AboutPage;