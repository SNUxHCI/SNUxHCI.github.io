import React from 'react';
import styles from './MainLayout.module.scss';
import Footer from '../Footer/Footer';

const MainLayout = ({title, description, tagtitle, children}) => {

  return (
    <main>
      <article>
        {title &&
        <h1 className={styles.headerTitle}>{title}</h1>
        }
        {children}
      </article>
      <Footer/>
    </main>
  );
}
 
export default MainLayout;

