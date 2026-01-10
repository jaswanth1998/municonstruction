import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CompanyStory, MissionValues, TeamSection } from '../components/about'
import { CTABanner } from '../components/home'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Muni Construction - Halifax Contractor</title>
        <meta
          name="description"
          content="Learn about Muni Construction - Halifax's trusted contractor since 2025. Meet our experienced team and discover our commitment to quality construction."
        />
      </Helmet>

      <main>
        {/* Page Header */}
        <section className="relative pt-32 pb-20 bg-gray-900">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=600&fit=crop"
              alt="Construction background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />
          </div>

          {/* Content */}
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Building Trust, One Project at a Time
              </h1>
              <p className="text-xl text-gray-300">
                Get to know the team behind Halifax's most trusted construction company.
              </p>
            </motion.div>
          </div>
        </section>

        <CompanyStory />
        <MissionValues />
        <TeamSection />
        <CTABanner />
      </main>
    </>
  )
}

export default About
