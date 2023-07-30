import React, { useState } from "react";
import styles from './Lab.module.scss';

import linkImg from "../../assets/UI/link.svg";


const Lab = (props) => {

	const name      = props.lab.name;
	const fullname  = props.lab.fullname;
	const url       = props.lab.url;
	const prof      = props.lab.prof;
	const research  = props.lab.research.split(",");
	const logo      = props.lab.logo;
	const profPhoto = props.lab.profphoto;

	console.log(name, fullname, url, prof, research, logo)

	const [mouseOver, setMouseOver] = useState(false);

	return (
		<div className={styles.labInfo}>
			<div className={styles.labImgWrapper} onMouseOver={() => { setMouseOver(true); }} onMouseOut={() => { setMouseOver(false); }}>
				{mouseOver ? <img
					src={`./assets/Profs/${profPhoto}.png`}
					className={styles.profImg}
				></img> :
					logo != undefined ? <img 
						src={`./assets/Logo/${logo}.png`} 
						className={styles.labImg}
					></img> : <h4 className={styles.labImgFake}>{`${name} LAB`}</h4>
				}
			</div>
			<div className={styles.labDesc}>
				<div className={styles.labNameWrapper}>
					<h4 className={styles.labName}>{`${name} LAB`}</h4>
					<a href={url} target="_blank">
						<img src={linkImg} alt="logo" width={"60%"} className={styles.labLink} />
					</a>
				</div>
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