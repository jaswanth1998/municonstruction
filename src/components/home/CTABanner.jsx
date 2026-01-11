import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import Button from '../common/Button'
import { companyInfo } from '../../config/theme'

const CTABanner = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=600&fit=crop"
          alt="Construction background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/95 via-primary-500/90 to-primary-600/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Get a free consultation and detailed quote today. No obligations, just honest advice from Halifax's trusted construction experts.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              to="/contact"
              size="lg"
              style={
                {
                  color: "black"
                }
              }
              className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 shadow-xl"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Get Free Quote
            </Button>
            <a
              href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
              
              className="inline-flex items-center gap-3 px-6 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <div className="p-2 bg-white/20 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <span>Call Us: {companyInfo.phone}</span>
            </a>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Local Halifax Team
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
