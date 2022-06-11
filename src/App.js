import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import LibrarySection from './components/LibrarySection/LibrarySection'
import FaqSection from './components/FaqSection/FaqSection'
import RequestDemoCard from './components/RequestDemoCard/RequestDemoCard'
import Footer from './components/Footer/Footer'
import Footnote from './components/Footnote/Footnote'
import './App.less'

const App = () => (
	<div>
		<HeroSection />
		<FeatureSection />
		<LibrarySection />
		<FaqSection />
		<RequestDemoCard />
		<Footer />
		<Footnote />
	</div>
)

export default App
