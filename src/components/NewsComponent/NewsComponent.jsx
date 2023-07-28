import React from 'react';
import styles from './NewsComponent.module.scss';

const NewsComponent = ({thumbnail, title, date}) => {
  return ( <>
    <div className={styles.container}>
      <img src={thumbnail} alt="thumbnail" className={styles.thumbnail}/>
      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{date}</p>
    </div>
  </> );
}
 
export default NewsComponent;