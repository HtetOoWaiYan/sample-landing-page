import React, { useRef } from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import LibrarySection from './components/LibrarySection/LibrarySection'
import FaqSection from './components/FaqSection/FaqSection'
import RequestDemoCard from './components/RequestDemoCard/RequestDemoCard'
import Footer from './components/Footer/Footer'
import Footnote from './components/Footnote/Footnote'
import './App.less'

const App = () => {
	const requestDemoCardRef = useRef(null)

	return (
		<div>
			<HeroSection requestDemoCardRef={requestDemoCardRef} />
			<FeatureSection />
			<LibrarySection />
			<FaqSection />
			<RequestDemoCard ref={requestDemoCardRef} />
			<Footer />
			<Footnote />
		</div>
	)
}

export default App
