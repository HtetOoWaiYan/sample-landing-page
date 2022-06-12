import React, { forwardRef }from 'react'
import { Button, Input } from 'antd'
import styles from './RequestDemoCard.module.css'

const RequestDemoCard = (props, ref) => {
	return (
		<section ref={ref} className={`section ${styles.section}`}>
			<div className='container'>
				<div className={styles.content}>
					<h1 className={styles.heading}>Feeling intrigued?</h1>
					<p className={styles.subheading}>Request a demo to test it out yourself!</p>
					<form className={styles.form}>
						<Input
							placeholder='Email'
							size='large'
							className={styles.input}
						/>
						<Button
							type='primary'
							size='large'
							className={styles.button}
						>Request Demo</Button>
					</form>
					<img src='img/pattern/pattern-4.svg' className={styles.pattern}/>
				</div>
			</div>
		</section>
	)
}

export default forwardRef(RequestDemoCard)