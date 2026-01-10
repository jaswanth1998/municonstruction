import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { team } from '../../data/team'
import SectionTitle from '../common/SectionTitle'

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Generate gradient based on index
  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-purple-500 to-pink-600',
  ]

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <SectionTitle
          title="Meet Our Team"
          subtitle="The experienced professionals behind Muni Construction's success."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
            >
              <div
                className="
                  relative overflow-hidden
                  bg-white dark:bg-slate-800
                  rounded-2xl
                  border border-gray-100 dark:border-slate-700
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {/* Avatar */}
                <div className="relative pt-8 px-8">
                  <div
                    className={`
                      w-32 h-32 mx-auto
                      rounded-full
                      bg-gradient-to-br ${gradients[index % gradients.length]}
                      flex items-center justify-center
                      text-white font-bold text-3xl
                      shadow-xl
                      group-hover:scale-105
                      transition-transform duration-300
                    `}
                  >
                    {member.avatar ? (
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      getInitials(member.name)
                    )}
                  </div>

                  {/* LinkedIn Link */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        absolute top-4 right-4
                        p-2 rounded-full
                        bg-gray-100 dark:bg-slate-700
                        text-gray-600 dark:text-gray-300
                        hover:bg-blue-500 hover:text-white
                        transition-all duration-300
                      "
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gray-50 dark:bg-slate-800 rounded-2xl">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
              Want to join our team?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're always looking for talented tradespeople and professionals.
            </p>
            <a
              href="mailto:careers@municonstruction.ca"
              className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              careers@municonstruction.ca
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
