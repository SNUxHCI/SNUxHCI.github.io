import React from 'react';
import styles from './Footer.module.scss';

import xImg from '../../../assets/UI/xImg.svg'

const Footer = () => {
  const labList = ['CC', 'HCC', 'HCS', 'HCI+D', 'HCI', 'UX', "ViBA"];
  const labLinks = {
    'CC': 'http://cclab.snu.ac.kr/',
    'HCC': 'http://hcc.snu.ac.kr/wordpress/',
    'HCS': 'https://hcs.snu.ac.kr/',
    'HCI+D': 'http://hcid.snu.ac.kr/',
    'HCI': 'http://hcil.snu.ac.kr/',
    'UX': 'https://ux.snu.ac.kr/',
    'ViBA': 'https://hyunwoopark.com/'
  }

  return ( <>
    <div className={styles.footerContainer}>
      <div className={styles.labsContainer}>
        {
          labList.map((lab, i) =>
            <a href={labLinks[lab]} className={styles.labLink} target='_blank' key={i}>
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