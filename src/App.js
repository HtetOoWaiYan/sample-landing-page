import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import LibrarySection from './components/LibrarySection/LibrarySection'
import FaqSection from './components/FaqSection/FaqSection'
import './App.less'

const App = () => (
	<div>
		<HeroSection />
		<FeatureSection />
		<LibrarySection />
		<FaqSection />
	</div>
)

export default App
