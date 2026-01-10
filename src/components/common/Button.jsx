import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg',
  secondary:
    'bg-transparent border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500 hover:text-white',
  outline:
    'bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50',
  ghost:
    'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      to,
      className = '',
      disabled = false,
      loading = false,
      icon,
      iconPosition = 'left',
      animate = true,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-semibold rounded-lg
      transition-all duration-300 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      dark:focus:ring-offset-slate-900
      disabled:opacity-50 disabled:cursor-not-allowed
    `

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && iconPosition === 'left' && !loading && icon}
        {children}
        {icon && iconPosition === 'right' && !loading && icon}
      </>
    )

    const MotionComponent = animate ? motion.button : 'button'
    const motionProps = animate
      ? {
          whileHover: { scale: disabled ? 1 : 1.02 },
          whileTap: { scale: disabled ? 1 : 0.98 },
        }
      : {}

    // External link
    if (href) {
      return (
        <motion.a
          ref={ref}
          href={href}
          className={combinedStyles}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {content}
        </motion.a>
      )
    }

    // Internal link (React Router)
    if (to) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link ref={ref} to={to} className={combinedStyles} {...props}>
            {content}
          </Link>
        </motion.div>
      )
    }

    // Regular button
    return (
      <MotionComponent
        ref={ref}
        className={combinedStyles}
        disabled={disabled || loading}
        {...motionProps}
        {...props}
      >
        {content}
      </MotionComponent>
    )
  }
)

Button.displayName = 'Button'

export default Button
