import React, { useState, useEffect } from 'react';
import styles from './PublicationPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';
import Publication from './Publication';

import { readYaml } from '../../functions/readYaml';

const PublicationPage = () => {


	const fetchPubs = async () => {
		const pubs 			 = await readYaml(require("../../assets/Pubs/pubs.yaml"));
		const yearList   = [...new Set(pubs.map(pub => pub.year))].sort((a, b) => b - a);
		setPubs(pubs);
		setFilteredPubs(pubs);
		setYearList(["All", ...yearList.slice(0, 3), "Past"]);
	}

	const updateSelectedYear = (year) => {
		setSelectedYear(year);
		setFilteredPubs(year == "All" ? pubs : pubs.filter(pub => pub.year == year));
	}

	const [selectedYear, setSelectedYear] = useState("All");
	const [yearList, setYearList]   = useState([]);
	const [pubs, setPubs] 			    = useState([]);
	const [filteredPubs, setFilteredPubs] = useState([]);


	useEffect(() => { fetchPubs(); }, []);

  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout title='PUBLICATIONS'>
			<div className={styles.yearList}>
				{yearList.map((year, index) => {
					return (
						<div className={styles.yearSelection} key={index}>
							<h4 
								className={selectedYear == year ? styles.yearSelectedTitle : styles.yearTitle}
								onClick={() => updateSelectedYear(year)}
							>{year}</h4>
						</div>
				)})}
			</div>
			<div>
				{filteredPubs.map((pub, index) => {
					return (
						<Publication key={index} pub={pub}/>
					)
				})}
			</div>
    </MainLayout>
  </> );
}
 
export default PublicationPage;