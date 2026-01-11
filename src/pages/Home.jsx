import { Helmet } from 'react-helmet-async'
import {
  HeroSection,
  WhatWeDoSection,
  WhyChooseUs,
  Testimonials,
  CTABanner,
  Gallery,
} from '../components/home'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Muni Construction | Halifax's Trusted Contractor</title>
        <meta
          name="description"
          content="Muni Construction is Halifax's trusted contractor for residential and commercial construction, renovations, roofing, and more. Licensed & insured in Nova Scotia. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="construction Halifax, contractor Nova Scotia, home builder, commercial construction, renovation, roofing Halifax"
        />
      </Helmet>

      <main>
        <HeroSection />
        <WhatWeDoSection />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <CTABanner />
      </main>
    </>
  )
}

export default Home
