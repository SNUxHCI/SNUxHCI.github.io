import React, { useState, useEffect, useRef } from 'react';
import styles from './CoursePage.module.scss';

import SideNavigator from '../../components/CommonLayout/SideNavigator/SideNavigator';
import MainLayout from '../../components/CommonLayout/MainLayout/MainLayout';
import Header from '../../components/CommonLayout/Header/Header';

import { readYaml } from '../../functions/readYaml';
import Course from './Course';

const CoursePage = () => {

	const [deptFilter, setDeptFilter] = useState(null);
	const [instructorFilter, setInstructorFilter] = useState(null);
	const [termFilter, setTermFilter] = useState(null);

	const [courses, setCourses] = useState([]);
	const [filteredCourses, setFilteredCourses] = useState([]);
	const [deptList, setDeptList] = useState([]);
	const [instructorList, setInstructorList] = useState([]);
	const [termList, setTermList] = useState([]);

	const deptFilterRef = useRef(null);
	const instructorFilterRef = useRef(null);
	const termFilterRef = useRef(null);


	const filterInfoList = [
		{ name: "Department", option: deptList, state: deptFilter, setState: setDeptFilter, ref: deptFilterRef },
		{ name: "Instructor", option: instructorList, state: instructorFilter, setState: setInstructorFilter, ref: instructorFilterRef },
		{ name: "Term", option: termList, state: termFilter, setState: setTermFilter, ref: termFilterRef }
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
		if (value == "All") value = null;
		let filteredCourses = [...courses];

		if (filterInfo.name == "Department") {
			if (value != null) filteredCourses = filteredCourses.filter(course => course.department == value);
		}
		else if (deptFilter) filteredCourses = filteredCourses.filter(course => course.department == deptFilter);

		if (filterInfo.name == "Instructor")  {
			if (value != null) filteredCourses = filteredCourses.filter(course => course.instructor == value);
		}
		else if (instructorFilter) filteredCourses = filteredCourses.filter(course => course.instructor == instructorFilter);

		if (filterInfo.name == "Term") {
			if (value != null) filteredCourses = filteredCourses.filter(course => course.term == value);
		}
		else if (termFilter) filteredCourses = filteredCourses.filter(course => course.term == termFilter);

		setFilteredCourses(filteredCourses);
	}

	const resetFilter = () => {
		setDeptFilter(null);
		setInstructorFilter(null);
		setTermFilter(null);
		setFilteredCourses(courses);

		deptFilterRef.current.value = "All";
		instructorFilterRef.current.value = "All";
		termFilterRef.current.value = "All";


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
									ref={filterInfo.ref}
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
				<div className={styles.courseResetDesc} onClick={resetFilter}>
					{"reset all"}
				</div>
			</div>
			<div className={styles.courseList}>
				{filteredCourses.map((course, index) => {
					return (
						<Course course={course} key={index}/>
					)
				})}
			</div>
    </MainLayout>
  </> );
}
 
export default CoursePage;