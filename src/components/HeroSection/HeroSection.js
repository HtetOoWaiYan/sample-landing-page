import React, { useState } from 'react'
import Header from '../Header/Header'
import { Button, Input } from 'antd'
import styles from './HeroSection.module.css'

const HeroSection = ({ requestDemoCardRef }) => {
	const [ email, setEmail ] = useState('')

	return (
		<section className={`section ${styles.section}`}>
			<Header requestDemoCardRef={requestDemoCardRef} />
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.content_text}>
						<h1 className={styles.heading}>Modern audiobook experience</h1>
						<p className={styles.subheading}>Listening audiobook has never been easier & more pleasurable.</p>
						<form className={styles.form}>
							<Input
								placeholder='Email'
								size='large'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={styles.input}
							/>
							<Button
								type='primary'
								size='large'
								ghost
								className={styles.button}
							>Join Waitlist</Button>
						</form>
						<p className={styles.footnote}>Coming soon on The App Store & Google Play Store</p>
					</div>
					<div className={styles.content_image}>
						<div className={styles.mockup_image}>
							<img src='img/mockup/iphone-min.png' />
							<img src='img/mockup/pixel-min.png' />
						</div>
						<img src='img/pattern/pattern-1.svg' className={styles.pattern_1}/>
						<img src='img/pattern/pattern-2.svg' className={styles.pattern_2}/>
						<img src='img/pattern/pattern-3.svg' className={styles.pattern_3}/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection