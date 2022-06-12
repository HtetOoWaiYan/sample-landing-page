import React from 'react'
import styles from './FeatureSection.module.css'

const FeatureSection = () => {
	return (
		<section className={`section ${styles.section}`}>
			<div className='container'>
				<h1 className={`heading ${styles.heading}`}>What we are proud of</h1>
				<div className={styles.content}>
					<div className={styles.content_group}>
						<img
							src='img/mockup/player-min.jpg'
							alt='screenshot of audio player'
							className={styles.content_group_image_1}
						/>
						<div className={styles.content_group_1_text}>
							<h1 className={styles.content_group_heading}>Distraction free audio player</h1>
							<p className={styles.content_group_subheading}>Carefully designed user interface for distraction free listening experience.</p>
							<img src='img/pattern/dash.svg' />
						</div>
					</div>
					<div className={styles.content_group}>
						<div className={styles.content_group_2_text}>
							<h1 className={styles.content_group_heading}>Personalized feed</h1>
							<p className={styles.content_group_subheading}>Exclusively curated audiobook, audio magazines, and sleep & meditation audio entertainment.</p>
							<img src='img/pattern/dash.svg' />
						</div>
						<img
							src='img/mockup/homepage-min.jpg'
							alt='screenshot of app homepage'
							className={styles.content_group_image_2}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeatureSection