import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

const ServicesPreview = () => {
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

  return (
    <section className="section-padding bg-gray-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <SectionTitle
          title="Our Services"
          subtitle="From residential construction to commercial projects, we offer comprehensive building services to meet all your needs."
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link
                  to={`/services#${service.id}`}
                  className="group block h-full"
                >
                  <div
                    className="
                      h-full p-6 md:p-8
                      bg-white dark:bg-slate-800
                      rounded-2xl
                      border border-gray-100 dark:border-slate-700
                      shadow-sm
                      transition-all duration-300
                      hover:shadow-xl hover:-translate-y-1
                      hover:border-primary-200 dark:hover:border-primary-800
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        inline-flex items-center justify-center
                        w-14 h-14 mb-6
                        rounded-xl
                        bg-primary-50 dark:bg-primary-900/30
                        text-primary-500
                        group-hover:bg-primary-500 group-hover:text-white
                        transition-all duration-300
                      "
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {service.description.slice(0, 120)}...
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <div
                      className="
                        flex items-center gap-2
                        text-primary-500 font-semibold text-sm
                        group-hover:gap-3 transition-all duration-300
                      "
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button to="/services" variant="secondary" size="lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
