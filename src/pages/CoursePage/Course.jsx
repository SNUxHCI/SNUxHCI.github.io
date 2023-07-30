import React, { useEffect, useRef } from "react";

import styles from "./Course.module.scss";


const Course = (props) => {

	const title = props.course.title;
	const description = props.course.description;
	const instructor = props.course.instructor;
	const department = props.course.department;
	const term = props.course.term;

	const descRef = useRef(null);

	useEffect(() => {
		descRef.current.innerHTML = description;
	}, []);

	return (
		<div className={styles.courseInfo}>
			<h3>{title}</h3>
			<p ref={descRef}></p>
			<div className={styles.courseShortDesc}>
				<h4>{"Instructor: "}</h4>
				<h4 className={styles.courseShortDescContents}>{`Prof. ${instructor}`}</h4>
			</div>
			<div className={styles.courseShortDesc}>
				<h4>{"Department: "}</h4>
				<h4 className={styles.courseShortDescContents}>{department}</h4>
			</div>
			<div className={styles.courseShortDesc}>
				<h4>{"Term: "}</h4>
				<h4 className={styles.courseShortDescContents}>{term}</h4>
			</div>

		</div>
	)
}

export default Course;