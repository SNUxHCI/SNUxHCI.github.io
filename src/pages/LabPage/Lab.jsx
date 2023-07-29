import React from "react";
import styles from './Lab.module.scss';


const Lab = (props) => {

	const name = props.lab.name;
	const fullname = props.lab.fullname;
	const url = props.lab.url;
	const prof = props.lab.prof;
	const research = props.lab.research.split(",");

	console.log(name, fullname, url, prof, research)

	return (
		<div className={styles.labInfo}>
			<div className={styles.labLogo}>

			</div>
			<div className={styles.labDesc}>
				<h4 className={styles.labName}>{`${name} LAB`}</h4>
				<p className={styles.labShortDesc}>{`${fullname} Lab.`}</p>
				<p className={styles.labShortDesc}>{`Prof. ${prof}`}</p>
				<p className={styles.labResearchDesc}>{"Research Area:"}</p>
				<div className={styles.labResearchWrapper}>
					{research.map((research, index) => {
						return (
							<p className={styles.labResearch} key={index}>{research}</p>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Lab;