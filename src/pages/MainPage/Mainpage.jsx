import React, {useState, useEffect} from 'react';
import styles from './MainPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

import mainImg0 from '../../assets/MainImg/mainImg_0.svg';
import mainImg1 from '../../assets/MainImg/mainImg_1.svg';
import mainImg2 from '../../assets/MainImg/mainImg_2.svg';
import mainImg3 from '../../assets/MainImg/mainImg_3.svg';

const MainPage = () => {
  // animation
  const [currentImage, setCurrentImage] = useState(0);
  const mainImgs = [mainImg0, mainImg1, mainImg2, mainImg3];
  const fps = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevState => {
        if (prevState < 3) {
          return prevState + 1;
        } else {
          return 0;
        }
      });
    }, (1000/fps)); // 1 second (1000ms) interval

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout>
      <div className={styles.container}>
        <img src={mainImgs[currentImage]} alt="mainImg" className={styles.mainImg} />
        <p className={styles.description}>
          We are the <b className={styles.bold}>Human-Computer Interaction Group </b>
          at Seoul National University, a multidisciplinary research consortium
          comprised of seven research labs from four distinct colleges.
        </p>
      </div>
    </MainLayout>
  </> );
}
 
export default MainPage;