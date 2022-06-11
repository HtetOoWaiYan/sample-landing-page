import React from 'react'
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled, MediumSquareFilled } from '@ant-design/icons'
import styles from './Footnote.module.css'

const Footnote = () => {
	return (
		<section className={`section ${styles.section}`}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.content_group_social}>
						<a href='#'><FacebookFilled /></a>
						<a href='#'><TwitterSquareFilled /></a>
						<a href='#'><LinkedinFilled /></a>
						<a href='#'><MediumSquareFilled /></a>
					</div>
					<div className={styles.content_group_text}>
						<a href='#'>Terms of Use</a>
						<a href='#'>Privacy Policy</a>
						<span>All rights reserved © AudiBooks Inc.</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footnote