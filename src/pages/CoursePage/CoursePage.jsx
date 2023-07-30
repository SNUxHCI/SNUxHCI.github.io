import React, { useState, useEffect } from 'react';
import styles from './CoursePage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

import { readYaml } from '../../functions/readYaml';

const CoursePage = () => {

	const [deptFilter, setDeptFilter] = useState(null);
	const [instructorFilter, setInstructorFilter] = useState(null);
	const [termFilter, setTermFilter] = useState(null);

	const [courses, setCourses] = useState(null);
	const [filteredCourses, setFilteredCourses] = useState(null);
	const [deptList, setDeptList] = useState([]);
	const [instructorList, setInstructorList] = useState([]);
	const [termList, setTermList] = useState([]);

	const filterInfoList = [
		{ name: "Department", option: deptList, state: deptFilter, setState: setDeptFilter },
		{ name: "Instructor", option: instructorList, state: instructorFilter, setState: setInstructorFilter },
		{ name: "Term", option: termList, state: termFilter, setState: setTermFilter }
	]


	const fetchCourses = async () => {
		const courses  = await readYaml(require("../../assets/Courses/courses.yaml"));
		const deptList = [...new Set(courses.map(course => course.department))];
		const instructorList = [...new Set(courses.map(course => course.instructor))];
		const termList = [...new Set(courses.map(course => course.term))];

		setCourses(courses);
		setFilteredCourses(courses);
		setDeptList(deptList);
		setInstructorList(instructorList);
		setTermList(termList);
	}

	const updateFilteredCourses = (filterInfo, value) => {
		let filteredCourses = [...courses];
		if (filterInfo.name == "Department") filteredCourses = filteredCourses.filter(course => course.department == value);
		else if (deptFilter)                 filteredCourses = filteredCourses.filter(course => course.department == deptFilter);

		if (filterInfo.name == "Instructor") filteredCourses = filteredCourses.filter(course => course.instructor == value);
		else if (instructorFilter)           filteredCourses = filteredCourses.filter(course => course.instructor == instructorFilter);

		if (filterInfo.name == "Term") filteredCourses = filteredCourses.filter(course => course.term == value);
		else if (termFilter)           filteredCourses = filteredCourses.filter(course => course.term == termFilter);

		setFilteredCourses(filteredCourses);
	}

	useEffect(() => { fetchCourses(); }, []);



  return ( <>
    <Header/>
    <SideNavigator/>
    <MainLayout title='COURSES'>
			<div className={styles.courseFilterDesc}>
				{"Filter by:"}
			</div>
			<div className={styles.courseFilter}>
				{filterInfoList.map((filterInfo, index) => {
					return (
						<div className={styles.singleFilter} key={index}>
							<div className={styles.filterName}>{filterInfo.name}</div>
							<div className={styles.filterOption}>
								{/* Dropdown menu to select option */}
								<select 
									className={styles.filterSelect} 
									onChange={(e) => { filterInfo.setState(e.target.value); updateFilteredCourses(filterInfo, e.target.value); }}
								>
									<option value={null}>All</option>
									{filterInfo.option.map((option, index) => {
										return ( <option value={option} key={index}>{option}</option> );
									})}
									</select>
							</div>	
						</div>
					)
				})}
				<div className={styles.courseResetDesc}>
					{"reset all"}
				</div>
			</div>
			<div className={styles.courseList}>
				{filteredCourses.map((course, index) => {
					
				})}
			</div>
    </MainLayout>
  </> );
}
 
export default CoursePage;