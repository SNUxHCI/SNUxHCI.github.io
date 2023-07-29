import React from "react";
import styles from './Lab.module.scss';


const Lab = (props) => {

	const name     = props.lab.name;
	const fullname = props.lab.fullname;
	const url      = props.lab.url;
	const prof     = props.lab.prof;
	const research = props.lab.research.split(",");
	const logo     = props.lab.logo;

	console.log(name, fullname, url, prof, research, logo)

	return (
		<div className={styles.labInfo}>
			<div className={styles.labImgWrapper}>
				{logo != undefined ? <img src={`./assets/Logo/${logo}.png`} className={styles.labImg}></img> :
						<h4 className={styles.labImgFake}>{`${name} LAB`}</h4>
				}
			</div>
			<div className={styles.labDesc}>
				<h4 className={styles.labName}>{`${name} LAB`}</h4>
				<p className={styles.labShortDesc}>{`${fullname} Lab.`}</p>
				<p className={styles.labShortDesc}>{`Prof. ${prof}`}</p>
				<p className={styles.labResearchDesc}>{"Research Area:"}</p>
				<div className={styles.labResearchWrapper}>
					{research.map((research, index) => {
						return (
							<div className={styles.labResearch} key={index}>{research}</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Lab;