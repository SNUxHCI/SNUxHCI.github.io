import React from 'react';
import styles from './Footer.module.scss';

import xImg from '../../../assets/UI/xImg.svg'

const Footer = () => {
  const labList = ['CC', 'HCC', 'HCS', 'HCI+D', 'HCI', 'UX', "ViBA"];

  return ( <>
    <div className={styles.footerContainer}>
      <div className={styles.labsContainer}>
        {
          labList.map((lab, i) =>
            <a href="" className={styles.labLink} key={i}>
              <img src={xImg} alt="" className={styles.xImg}/>
              <p className={styles.lab}>{`${lab} LAB`}</p>
            </a>
          )
        }
      </div>
    </div>
  </> );
}
 
export default Footer;