import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const CompanyStory = () => {
  const milestones = [
    { year: '2015', event: 'Founder gains first decade of industry experience' },
    { year: '2020', event: 'Team expands to include specialized tradespeople' },
    { year: '2025', event: 'Muni Construction officially launches in Halifax' },
    { year: 'Today', event: 'Serving Halifax and surrounding communities' },
  ]

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Building Halifax's Future, One Project at a Time
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Founded in Halifax in 2025, Muni Construction was born from a simple
                vision: to bring quality, reliable construction services to our
                community. Our founder, with over 15 years of industry experience,
                saw the need for a construction company that truly puts clients first.
              </p>
              <p>
                What started as a small team tackling residential renovations has
                grown into Halifax's trusted name for both residential and commercial
                construction. We've had the privilege of building dozens of custom
                homes, renovating historic properties, and creating functional
                commercial spaces across Nova Scotia.
              </p>
              <p>
                Our roots in Halifax run deep. We understand the unique challenges of
                building in Atlantic Canada - from weather-proofing against harsh
                winters to navigating local building codes. This local expertise,
                combined with our commitment to craftsmanship, sets us apart.
              </p>
              <p>
                Today, Muni Construction is proud to be a fully licensed and insured
                Nova Scotia construction company, employing local trades people and
                supporting our community with every project we complete.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                'Licensed in Nova Scotia',
                'Fully Insured',
                'Local Halifax Team',
                '15+ Years Experience',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="Construction team at work"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>

            {/* Timeline Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -left-8 right-8 md:right-auto md:w-80 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Our Journey
              </h3>
              <div className="space-y-3">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold text-sm w-12">
                      {milestone.year}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {milestone.event}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory
