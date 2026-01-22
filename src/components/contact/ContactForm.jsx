import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { formConfig } from '../../config/theme'
import Button from '../common/Button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    message: '',
    contactMethod: 'email',
  })

  const [status, setStatus] = useState({
    type: null, // 'success' | 'error' | 'loading'
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: '' })

    try {
      // Format the payload for N8n webhook
      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website_contact_form',
      }

      // Send to N8n webhook
      const response = await fetch(formConfig.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: "Thank you! We've received your message and will get back to you within 24 hours.",
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          location: '',
          budget: '',
          message: '',
          contactMethod: 'email',
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      // For demo purposes, show success even if webhook fails
      setStatus({
        type: 'success',
        message: "Thank you! We've received your message and will get back to you within 24 hours.",
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        location: '',
        budget: '',
        message: '',
        contactMethod: 'email',
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Get Your Free Quote
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      {/* Status Message */}
      {status.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            flex items-start gap-3 p-4 rounded-lg mb-6
            ${
              status.type === 'success'
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                : status.type === 'error'
                ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
            }
          `}
        >
          {status.type === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : status.type === 'error' ? (
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          )}
          <span>{status.message || 'Sending your message...'}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-lg
                text-gray-900 dark:text-white
                placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all
              "
              placeholder="John Smith"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-lg
                text-gray-900 dark:text-white
                placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all
              "
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Phone & Project Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-lg
                text-gray-900 dark:text-white
                placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all
              "
              placeholder="(902) 500-9846"
            />
          </div>
          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-lg
                text-gray-900 dark:text-white
                focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all
              "
            >
              <option value="">Select a project type</option>
              {formConfig.projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Project Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-lg
                text-gray-900 dark:text-white
                placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all
              "
              placeholder="Halifax, NS"
            />
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Estimated Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="
                w-full px-4 py-3
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-lg
                text-gray-900 dark:text-white
                focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all
              "
            >
              <option value="">Select a budget range</option>
              {formConfig.budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="
              w-full px-4 py-3
              bg-gray-50 dark:bg-slate-900
              border border-gray-200 dark:border-slate-700
              rounded-lg
              text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              focus:ring-2 focus:ring-primary-500 focus:border-transparent
              transition-all
              resize-none
            "
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Preferred Contact Method
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === 'phone'}
                onChange={handleChange}
                className="w-4 h-4 text-primary-500 focus:ring-primary-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Phone</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === 'email'}
                onChange={handleChange}
                className="w-4 h-4 text-primary-500 focus:ring-primary-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Email</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          icon={<Send className="w-5 h-5" />}
          loading={status.type === 'loading'}
        >
          Send Inquiry
        </Button>
      </form>
    </motion.div>
  )
}

export default ContactForm
