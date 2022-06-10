import React from 'react'
import { Card } from 'antd'
import styles from './LibrarySection.module.css'

const { Meta } = Card

const LibrarySection = () => {
	const data = [
		{
			id: 1,
			title: 'The Black Witch',
			author: 'Laurie Forest'
		},
		{
			id: 2,
			title: 'The Prisoner’s Key',
			author: 'C.J. Archer'
		},
		{
			id: 3,
			title: 'Light Mage',
			author: 'Laurie Forest'
		},
		{
			id: 4,
			title: 'The Fire Queen',
			author: 'Emily R. King'
		},
		{
			id: 5,
			title: 'The Kidnapper’s Accomplice',
			author: 'C.J. Archer'
		},
		{
			id: 6,
			title: 'Sorcerer’s Stone',
			author: 'J.K Rowling'
		},
		{
			id: 7,
			title: 'Chamber of Secrets',
			author: 'J.K Rowling'
		},
		{
			id: 8,
			title: 'Prisoner of Azkaban',
			author: 'J.K Rowling'
		},
	]

	return (
		<section className={`section ${styles.section}`}>
			<div className='container'>
				<div className={styles.content}>
					<h1 className={styles.heading}>Library</h1>
					<p className={styles.subheading}>Great listens to get started</p>
					<div className={styles.book_list_shadow}>
						<img src='img/pattern/line.svg' className={styles.shadow_left} />
						<div className={styles.book_list}>
							{data.map(item =>
								<Card
									key={item.id}
									cover={
										<img
											alt={item.title}
											src={`img/library/book-${item.id}.jpg`}
										/>
									}
									bordered={false}
									bodyStyle={{ paddingTop: '19px', paddingLeft: '0' }}
									className={styles.book_card}
								>
									<Meta title={item.title} description={item.author} />
								</Card>)
							}
						</div>
						<img src='img/pattern/line.svg' className={styles.shadow_right} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default LibrarySection