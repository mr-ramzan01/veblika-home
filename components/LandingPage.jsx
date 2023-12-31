import React from 'react'
import FirstSection from './Landingpage/FirstSection'
import BrandWithUsSection from './Landingpage/BrandWithUsSection'
import FaqComp from './Landingpage/FaqComp'
import IntegratedAndSignup from './Landingpage/IntegratedAndSignup'

const LandingPage = () => {
  return (
    <div>
        <FirstSection />
        <FaqComp />
        <BrandWithUsSection />
        <IntegratedAndSignup />
    </div>
  )
}

export default LandingPage;