import React from 'react';
import styles from './MainLayout.module.scss';

import bannerImg from '../../../assets/UI/bannerImg.png';

const MainLayout = ({title, description, tagtitle, children}) => {
  return (
    <main>
      <img src={bannerImg} alt="banner" className={styles.banner}/>
      <article>
        <div className={styles.articleHeader}>
          <h1 className={styles.headerTitle}>{title}</h1>
          <p className={styles.headerDescription}>
            {description}
          </p>
        </div>
        {
          tagtitle &&
          <p className={styles.tagTitle}>{tagtitle}</p>
        }
        <div className={styles.mainContent}>
          {children}
        </div>
      </article>
    </main>
  );
}
 
export default MainLayout;

