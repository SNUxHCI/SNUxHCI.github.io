import React, { useState, useEffect } from 'react';
import styles from './LabPage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

import { readYaml } from '../../functions/readYaml';
import Lab from './Lab';

const LabPage = () => {

	const fetchLabs = async () => {
		const labs = await readYaml(require("../../assets/Labs/labs.yaml"));
		const deptsRaw = [...new Set(labs.map(lab => lab.dept))].sort((a, b) => a.localeCompare(b));

		// construct depts array
		const depts = ["All"];
		for (let i = 0; i < deptsRaw.length; i++) {
			if (i % 2 == 0 && i != 0) depts.push("");
			depts.push(deptsRaw[i]);
		}
		// reshape depts to be 2D array with 3 columns
		const numCols = 3;
		const numRows = Math.ceil(depts.length / numCols);
		const deptsReshaped = [];
		for (let i = 0; i < numRows; i++) {
			deptsReshaped.push(depts.slice(i * numCols, (i + 1) * numCols));
		}
		
		setLabs(labs);
		setFilteredLabs(labs);
		setDepts(deptsReshaped);
	}

	const updateSelectedDept = (dept) => {
		setSelectedDept(dept);
		setFilteredLabs(dept == "All" ? labs : labs.filter(lab => lab.dept == dept));
	}

	const [labs, setLabs] = useState([]);
	const [filteredLabs, setFilteredLabs] = useState([]);
	const [depts, setDepts] = useState([]);
	const [selectedDept, setSelectedDept] = useState("All");

	useEffect(() => { fetchLabs(); }, []);

  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout title='LABS'>
			<div className={styles.deptList}>
				{depts.map((row, index) => {
					return (
						<div className={styles.deptRow} key={index}>
							{row.map((dept, index) => {
								return (
									<div className={
										(dept == "" || dept == "All" ? styles.deptFixedItem: styles.deptItem)
									} key={index}>
										{dept != "" && <h4 
											className={styles.deptTitle + " " + (selectedDept == dept ? styles.deptSelectedTitle : "")}
											onClick={() => { updateSelectedDept(dept); } }
										>{dept}</h4>}
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
			<div className={styles.labList}>
				{filteredLabs.map((lab, index) => {
					return ( <Lab lab={lab} key={index}/> )
				})}
			</div>
    </MainLayout>
  </> );
}
 
export default LabPage;