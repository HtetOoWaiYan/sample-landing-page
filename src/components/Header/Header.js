import React from 'react'
import { Button } from 'antd'
import styles from './Header.module.css'

const Header = ({ requestDemoCardRef }) => {
	const handleButtonClick = () => {
		requestDemoCardRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<header>
			<div className={styles.container}>
				<div className={styles.content}>
					<img src='img/logo.svg' alt='audibooks-logo'/>
					<Button
						type='primary'
						size='large'
						onClick={handleButtonClick}
						className={styles.button}
					>Request Demo</Button>
				</div>
			</div>
		</header>
	)
}

export default Header