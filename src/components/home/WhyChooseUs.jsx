import { motion } from 'framer-motion'
import {
  Shield,
  Award,
  Clock,
  DollarSign,
  MapPin,
  Wrench,
  ShieldCheck,
  Leaf,
  MessageSquare,
  BadgeCheck,
} from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully certified and insured in Nova Scotia for your peace of mind',
    span: 'md:col-span-2',
    gradient: 'from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20',
    iconBg: 'bg-blue-500',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Decade of proven construction excellence',
    span: 'md:col-span-1',
    gradient: 'from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20',
    iconBg: 'bg-amber-500',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '95% of projects completed on schedule',
    span: 'md:col-span-1',
    gradient: 'from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20',
    iconBg: 'bg-green-500',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees, clear quotes from day one',
    span: 'md:col-span-1',
    gradient: 'from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20',
    iconBg: 'bg-purple-500',
  },
  {
    icon: MapPin,
    title: 'Local Halifax Team',
    description: 'Born and raised in Halifax, serving our community',
    span: 'md:col-span-1',
    gradient: 'from-red-500/10 to-rose-500/10 dark:from-red-500/20 dark:to-rose-500/20',
    iconBg: 'bg-red-500',
  },
  {
    icon: Wrench,
    title: 'Quality Craftsmanship',
    description: 'Attention to detail in every project',
    span: 'md:col-span-1',
    gradient: 'from-slate-500/10 to-gray-500/10 dark:from-slate-500/20 dark:to-gray-500/20',
    iconBg: 'bg-slate-600',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Rigorous safety protocols on every job site',
    span: 'md:col-span-1',
    gradient: 'from-teal-500/10 to-cyan-500/10 dark:from-teal-500/20 dark:to-cyan-500/20',
    iconBg: 'bg-teal-500',
  },
  // {
  //   icon: Leaf,
  //   title: 'Eco-Friendly Options',
  //   description: 'Sustainable building practices available',
  //   span: 'md:col-span-1 md:row-span-2',
  //   gradient: 'from-green-500/10 to-lime-500/10 dark:from-green-500/20 dark:to-lime-500/20',
  //   iconBg: 'bg-green-600',
  // },
  {
    icon: MessageSquare,
    title: 'Free Consultations',
    description: 'No-obligation project discussions',
    span: 'md:col-span-1',
    gradient: 'from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/20 dark:to-violet-500/20',
    iconBg: 'bg-indigo-500',
  },
  {
    icon: BadgeCheck,
    title: 'Warranty Backed',
    description: 'Comprehensive warranty on all work',
    span: 'md:col-span-1',
    gradient: 'from-primary-500/10 to-orange-500/10 dark:from-primary-500/20 dark:to-orange-500/20',
    iconBg: 'bg-primary-500',
  },
]

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <SectionTitle
          title="Why Choose Us"
          subtitle="We're committed to excellence in every project. Here's what sets Muni Construction apart."
        />

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isLarge = reason.span.includes('row-span-2')

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${reason.span} group`}
              >
                <div
                  className={`
                    h-full p-6
                    rounded-2xl
                    bg-gradient-to-br ${reason.gradient}
                    border border-gray-100 dark:border-slate-700/50
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:shadow-lg
                    hover:-translate-y-0.5
                    ${isLarge ? 'flex flex-col justify-between min-h-[250px]' : ''}
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      inline-flex items-center justify-center
                      w-12 h-12 mb-4
                      rounded-xl
                      ${reason.iconBg}
                      text-white
                      shadow-lg
                      group-hover:scale-110
                      transition-transform duration-300
                    `}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Extra content for large cards */}
                  {isLarge && (
                    <div className="mt-auto pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">


                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
