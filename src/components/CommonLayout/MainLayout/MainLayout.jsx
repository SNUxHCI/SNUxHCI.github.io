import React from 'react';
import styles from './MainLayout.module.scss';
import Footer from '../Footer/Footer';

const MainLayout = ({title, description, tagtitle, children}) => {

  return (
    <main>
      {title &&
      <h1 className={styles.headerTitle}>{title}</h1>
      }
      <article>
        {children}
      </article>
      <Footer/>
    </main>
  );
}
 
export default MainLayout;

