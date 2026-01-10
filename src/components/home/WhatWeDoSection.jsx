import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import SectionTitle from '../common/SectionTitle'

const WhatWeDoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Bento-style layout configuration
  const bentoConfig = [
    { span: 'md:col-span-2 md:row-span-2', size: 'large' }, // Residential - Large
    { span: 'md:col-span-1', size: 'small' }, // Commercial
    { span: 'md:col-span-1', size: 'small' }, // Renovations
    { span: 'md:col-span-1', size: 'small' }, // Roofing
    { span: 'md:col-span-1', size: 'small' }, // Concrete
    { span: 'md:col-span-2', size: 'medium' }, // Project Management - Wide
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <SectionTitle
          title="What We're Up To"
          subtitle="Comprehensive construction services tailored to your needs. From ground-up builds to renovations, we've got you covered."
        />

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const config = bentoConfig[index]
            const isLarge = config.size === 'large'
            const isMedium = config.size === 'medium'

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`${config.span} group`}
              >
                <Link
                  to={`/services#${service.id}`}
                  className={`
                    block h-full p-6 md:p-8
                    bg-white dark:bg-slate-800
                    rounded-2xl
                    border border-gray-100 dark:border-slate-700
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                    hover:-translate-y-1
                    ${isLarge ? 'min-h-[300px] md:min-h-[400px]' : ''}
                    ${isMedium ? 'min-h-[200px]' : ''}
                  `}
                >
                  <div className={`flex ${isLarge ? 'flex-col h-full' : isMedium ? 'flex-row items-start gap-6' : 'flex-col'}`}>
                    {/* Icon */}
                    <div
                      className={`
                        inline-flex items-center justify-center
                        ${isLarge ? 'w-16 h-16 mb-6' : 'w-12 h-12 mb-4'}
                        rounded-xl
                        bg-gradient-to-br from-primary-500 to-primary-600
                        text-white
                        shadow-lg shadow-primary-500/25
                        group-hover:scale-110
                        transition-transform duration-300
                      `}
                    >
                      <Icon className={isLarge ? 'w-8 h-8' : 'w-6 h-6'} />
                    </div>

                    {/* Content */}
                    <div className={`${isMedium ? 'flex-1' : ''} ${isLarge ? 'flex-1 flex flex-col' : ''}`}>
                      <h3
                        className={`
                          font-heading font-bold text-gray-900 dark:text-white
                          ${isLarge ? 'text-2xl md:text-3xl mb-4' : 'text-xl mb-2'}
                        `}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`
                          text-gray-600 dark:text-gray-300
                          ${isLarge ? 'text-lg leading-relaxed mb-6' : 'text-sm leading-relaxed mb-4'}
                          ${isLarge ? 'flex-1' : ''}
                        `}
                      >
                        {isLarge ? service.description : service.shortDescription}
                      </p>

                      {/* Features for large card */}
                      {isLarge && (
                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Learn More Link */}
                      <div
                        className={`
                          flex items-center gap-2
                          text-primary-500 font-medium text-sm
                          group-hover:gap-3 transition-all duration-300
                          ${isLarge ? 'mt-auto' : ''}
                        `}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
