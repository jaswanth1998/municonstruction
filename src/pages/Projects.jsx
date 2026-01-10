import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ProjectGrid } from '../components/projects'
import { CTABanner } from '../components/home'

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Muni Construction - Halifax Contractor</title>
        <meta
          name="description"
          content="Browse Muni Construction's portfolio of residential and commercial construction projects in Halifax, NS. See our quality craftsmanship in action."
        />
      </Helmet>

      <main>
        {/* Page Header */}
        <section className="relative pt-32 pb-20 bg-gray-900">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop"
              alt="Construction project"
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
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Projects We're Proud Of
              </h1>
              <p className="text-xl text-gray-300">
                Explore our diverse portfolio of residential and commercial construction projects across Halifax and Nova Scotia.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '50+', label: 'Custom Homes' },
                { number: '30+', label: 'Commercial Builds' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <ProjectGrid />
        <CTABanner />
      </main>
    </>
  )
}

export default Projects
