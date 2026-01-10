import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react'
import { companyInfo } from '../../config/theme'

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`,
      color: 'bg-blue-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      color: 'bg-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: companyInfo.address.full,
      href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.full)}`,
      color: 'bg-red-500',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Cards */}
      <div className="space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === 'Address' ? '_blank' : undefined}
              rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              className="
                flex items-start gap-4 p-6
                bg-white dark:bg-slate-800
                rounded-xl
                border border-gray-100 dark:border-slate-700
                shadow-sm hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-0.5
                group
              "
            >
              <div
                className={`
                  flex-shrink-0 w-12 h-12
                  ${item.color}
                  rounded-xl
                  flex items-center justify-center
                  text-white
                  group-hover:scale-110
                  transition-transform duration-300
                `}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.label}
                </span>
                <span className="text-gray-900 dark:text-white font-medium group-hover:text-primary-500 transition-colors">
                  {item.value}
                </span>
              </div>
            </motion.a>
          )
        })}
      </div>

      {/* Business Hours */}
      <motion.div
        variants={itemVariants}
        className="
          p-6
          bg-white dark:bg-slate-800
          rounded-xl
          border border-gray-100 dark:border-slate-700
        "
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Business Hours
          </h3>
        </div>
        <div className="space-y-2 text-gray-600 dark:text-gray-300">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="font-medium">{companyInfo.hours.weekdays}</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="font-medium">{companyInfo.hours.saturday}</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="font-medium">{companyInfo.hours.sunday}</span>
          </div>
        </div>
      </motion.div>

      {/* Emergency Services */}
      <motion.div
        variants={itemVariants}
        className="
          p-6
          bg-gradient-to-br from-primary-500 to-primary-600
          rounded-xl
          text-white
        "
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Emergency Services</h3>
            <p className="text-white/90 text-sm mb-3">
              We offer 24/7 emergency construction services for urgent repairs and damage.
            </p>
            <a
              href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary-600 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Follow Us
        </h3>
        <div className="flex gap-3">
          <a
            href={companyInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3
              bg-white dark:bg-slate-800
              border border-gray-100 dark:border-slate-700
              rounded-xl
              text-gray-600 dark:text-gray-300
              hover:bg-blue-500 hover:text-white hover:border-blue-500
              transition-all duration-300
            "
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href={companyInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3
              bg-white dark:bg-slate-800
              border border-gray-100 dark:border-slate-700
              rounded-xl
              text-gray-600 dark:text-gray-300
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-purple-500
              transition-all duration-300
            "
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={companyInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3
              bg-white dark:bg-slate-800
              border border-gray-100 dark:border-slate-700
              rounded-xl
              text-gray-600 dark:text-gray-300
              hover:bg-blue-600 hover:text-white hover:border-blue-600
              transition-all duration-300
            "
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ContactInfo
