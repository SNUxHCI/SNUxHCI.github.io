import React, { useState, useEffect } from "react";

import styles from './Publication.module.scss';

import { readYaml } from '../../functions/readYaml';


const Publication = (props) => {

	const title = props.pub.title;
	const authors = props.pub.authors;
	const venue = props.pub.venue;
	const lab = props.pub.lab;

  const [labName, setLabName] = useState("");
	const [labLink, setLabLink] = useState("");

	const fetchLabNameAndLink = async () => {
		const labs = await readYaml(require("../../assets/Labs/labs.yaml"));
		const lab = labs.filter(lab => lab.name == props.pub.lab)[0];

		setLabName(lab.fullname);
		setLabLink(lab.url);
	}

	useEffect(() => { fetchLabNameAndLink(); }, []);

	return (
		<div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.authors}>{authors}</p>
			<p className={styles.venue}>{venue}</p>
			<p className={styles.lab}><a href={labLink}>{labName + " Lab."}</a></p>

		</div>
	)
}

export default Publication;