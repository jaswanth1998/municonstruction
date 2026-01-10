import { motion } from 'framer-motion'

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  onClick,
  as: Component = 'div',
  ...props
}) => {
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const baseStyles = `
    bg-white dark:bg-slate-800
    rounded-xl
    shadow-card dark:shadow-dark-card
    transition-all duration-300
  `

  const hoverStyles = hover
    ? 'hover:shadow-card-hover dark:hover:shadow-dark-card-hover hover:-translate-y-1'
    : ''

  const clickStyles = onClick ? 'cursor-pointer' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <Component
        className={`${baseStyles} ${hoverStyles} ${clickStyles} ${paddingSizes[padding]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}

// Card Header sub-component
Card.Header = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
)

// Card Body sub-component
Card.Body = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
)

// Card Footer sub-component
Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 dark:border-slate-700 ${className}`}>
    {children}
  </div>
)

// Card Image sub-component
Card.Image = ({ src, alt, className = '' }) => (
  <div className={`-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
  </div>
)

export default Card
