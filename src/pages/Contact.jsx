import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ContactForm, ContactInfo } from '../components/contact'
import { companyInfo } from '../config/theme'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Muni Construction - Halifax Contractor</title>
        <meta
          name="description"
          content="Contact Muni Construction for a free quote on your construction project. Call us, email us, or fill out our contact form. Serving Halifax and Nova Scotia."
        />
      </Helmet>

      <main>
        {/* Page Header */}
        <section className="relative pt-32 pb-20 bg-gray-900">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
              alt="Contact us"
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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something Great Together
              </h1>
              <p className="text-xl text-gray-300">
                Ready to start your project? Get in touch with our team for a free consultation and quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-gray-50 dark:bg-slate-900/50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Info */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] md:h-[500px] relative">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
              companyInfo.address.full
            )}&zoom=14`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Muni Construction Office Location"
            className="grayscale dark:opacity-80"
          />

          {/* Map Overlay Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-8 left-8 md:left-16 right-8 md:right-auto max-w-sm"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Visit Our Office
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {companyInfo.address.full}
              </p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  companyInfo.address.full
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors"
              >
                Get Directions
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default Contact
