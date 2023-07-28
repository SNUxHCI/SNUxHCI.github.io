import React, {useState, useEffect} from 'react';
import styles from './NewsPage.module.scss';

import { readYaml } from '../../functions/readYaml';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';
import NewsComponent from '../../components/NewsComponent/NewsComponent';

const reformatDate = (date) => {
  let dateParts = date.split('-');
  return dateParts[2] + dateParts[0] + dateParts[1];
}

const getImgPathFromDate = (date) => {
  const reformattedDate = reformatDate(date);
  return `/images/news_${reformattedDate}.png`;
}

const NewsPage = () => {

	const [selectedYear, setSelectedYear] = useState("All");
	const [yearList, setYearList]   = useState([]);
	const [news, setNews] 			    = useState([]);
	const [filteredNews, setFilteredNews] = useState([]);

  const fetchNews = async () => {
    const newsRaw = await readYaml(require('../../assets/News/news.yaml'));
		const news       = newsRaw.sort((a, b) => a.title.localeCompare(b.title)).sort((a, b) => b.year - a.year);
		const yearList   = [...new Set(news.map(news => news.year))].sort((a, b) => b - a);
		setNews(news);
		setFilteredNews(news);
		setYearList(["All", ...yearList.slice(0, 3), "Past"]);
  }

  useEffect(() => { fetchNews(); }, []);


  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout title='NEWS'>
      {
        filteredNews.map((news, i) =>
        <NewsComponent key={i} title={news.title} date={news.date} thumbnail={getImgPathFromDate(news.date)}/>
      )}

    </MainLayout>
  </> );
}
 
export default NewsPage;