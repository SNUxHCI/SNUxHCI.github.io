import React from "react";

import styles from './Publication.module.scss';


const Publication = (props) => {

	const title = props.pub.title;
	const authors = props.pub.authors;
	const venue = props.pub.venue;
	const lab = props.pub.lab;

	return (
		<div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.authors}>{authors}</p>
			<p className={styles.venue}>{venue}</p>
			<p className={styles.lab}><a href="">{lab + " LAB"}</a></p>

		</div>
	)
}

export default Publication;