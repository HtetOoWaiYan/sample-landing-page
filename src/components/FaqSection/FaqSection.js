import React from 'react'
import { Collapse } from 'antd'
import styles from './FaqSection.module.css'

const { Panel } = Collapse

const FaqSection = () => {
	const data = [
		{
			id: 1,
			question: 'How do I listen to audiobooks?',
			answer: 'Our distraction free audioplayer will take you through enjoyable listening experience.'
		},
		{
			id: 2,
			question: 'How many collection of books do you have?',
			answer: 'Our collection is over 5,000 books as of today.'
		},
		{
			id: 3,
			question: 'Can I review an audiobook?',
			answer: 'Yes, you can leave a review under each audiobook.'
		},
		{
			id: 4,
			question: 'Who can I contact if I have any question?',
			answer: 'You can contact us on Twitter, Facebook, and other socials.'
		},
	]

	return (
		<section className={`section ${styles.section}`}>
			<div className='container'>
				<h1 className={styles.heading}>FAQs</h1>
				<Collapse defaultActiveKey={['1']} className={styles.collapse}>
					{data.map(item =>
						<Panel header={item.question} key={item.id}>
							<p className={styles.paragraph}>{item.answer}</p>
						</Panel>
					)}
				</Collapse>
			</div>
		</section>
	)
}

export default FaqSection