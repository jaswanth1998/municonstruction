import { motion } from 'framer-motion'

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-h2 font-bold mb-4 ${
          light ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
