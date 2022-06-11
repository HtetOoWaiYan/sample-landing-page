import React from 'react'
import { Button, Input } from 'antd'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<section className={`section ${styles.section}`}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.content_group_logo}>
						<img src='img/logo-textonly.svg' alt='audibooks logo' className={styles.logo}/>
						<p className={styles.subheading}>Modern audiobook experience</p>
					</div>
					<div className={styles.content_group}>
						<h4>Discover</h4>
						<a href='#'>Tech</a>
						<a href='#'>Features</a>
						<a href='#'>Careers</a>
						<a href='#'>About</a>
					</div>
					<div className={styles.content_group}>
						<h4>Info</h4>
						<a href='#'>Press</a>
						<a href='#'>Contact us</a>
						<a href='#'>FAQs</a>
					</div>
					<div className={styles.content_group_waitlist}>
						<h4>Join Our Waitlist</h4>
						<p className={styles.subheading}>Get notified when AudiBooks is released in The App Store & Google Play Store.</p>
						<form>
							<Input
								placeholder='Email'
								size='large'
								addonAfter={<Button
									type='link'
									icon={<img src='img/arrow-right.svg'/>}
								/>}
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer