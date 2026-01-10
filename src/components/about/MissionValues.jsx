import { motion } from 'framer-motion'
import {
  Trophy,
  ShieldAlert,
  MessageCircle,
  Leaf,
  Users,
} from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

const values = [
  {
    icon: Trophy,
    title: 'Quality',
    description:
      'We never compromise on craftsmanship. Every project reflects our commitment to excellence.',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: ShieldAlert,
    title: 'Safety',
    description:
      'The wellbeing of our team and clients is our top priority on every job site.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: MessageCircle,
    title: 'Transparency',
    description:
      "Honest communication, clear pricing, and no surprises - that's our promise.",
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Building responsibly with eco-friendly practices and materials when possible.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description:
      'Supporting Halifax through local hiring, partnerships, and community initiatives.',
    color: 'from-purple-500 to-violet-500',
  },
]

const MissionValues = () => {
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
    <section className="section-padding bg-gray-50 dark:bg-slate-900/50">
      <div className="container-custom">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            "To deliver exceptional construction services that exceed expectations
            while building lasting relationships with our clients and community."
          </p>
        </motion.div>

        {/* Values */}
        <SectionTitle
          title="Our Core Values"
          subtitle="These principles guide every decision we make and every project we undertake."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            const isLarge = index === 0 || index === 3

            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className={`${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div
                  className="
                    h-full p-8
                    bg-white dark:bg-slate-800
                    rounded-2xl
                    border border-gray-100 dark:border-slate-700
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                    hover:-translate-y-1
                    group
                  "
                >
                  {/* Icon */}
                  <div
                    className={`
                      inline-flex items-center justify-center
                      w-16 h-16 mb-6
                      rounded-xl
                      bg-gradient-to-br ${value.color}
                      text-white
                      shadow-lg
                      group-hover:scale-110
                      transition-transform duration-300
                    `}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default MissionValues
