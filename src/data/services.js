/**
 * Services Data
 * All service information for easy editing
 */

import {
  Home,
  Building2,
  Wrench,
  Warehouse,
  Box,
  ClipboardList,
} from 'lucide-react'

export const services = [
  {
    id: 'residential',
    title: 'Residential Construction',
    shortDescription: 'Custom homes built for Halifax families',
    description:
      'From custom dream homes to multi-unit properties, we bring your residential vision to life with quality craftsmanship and attention to detail.',
    icon: Home,
    features: [
      'Custom single-family homes',
      'Duplexes and multi-unit residential',
      'Home additions and extensions',
      'Detached garages and workshops',
      'Accessory dwelling units (ADUs)',
    ],
    benefits: [
      'Personalized design consultation',
      'Energy-efficient building options',
      'Local building code expertise',
      'Transparent timeline and budget',
      'Quality materials from trusted suppliers',
    ],
    cta: 'Request a Quote for Your Home Project',
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    shortDescription: 'Professional spaces that drive business',
    description:
      'Professional commercial spaces built to support your business success. We handle everything from ground-up construction to tenant improvements.',
    icon: Building2,
    features: [
      'Office buildings and fit-outs',
      'Retail spaces and storefronts',
      'Restaurants and hospitality',
      'Warehouses and industrial facilities',
      'Medical and dental offices',
    ],
    benefits: [
      'Minimal disruption to operations',
      'ADA compliance expertise',
      'Flexible scheduling options',
      'Commercial-grade materials',
      'Post-construction support',
    ],
    cta: 'Discuss Your Commercial Project',
  },
  {
    id: 'renovations',
    title: 'Renovations & Remodeling',
    shortDescription: 'Transform your existing space',
    description:
      'Transform your existing space into something extraordinary. Our renovation experts handle projects of all sizes with minimal disruption to your daily life.',
    icon: Wrench,
    features: [
      'Complete kitchen remodels',
      'Bathroom renovations and updates',
      'Basement finishing and conversions',
      'Whole-home renovations',
      'Heritage home restorations',
    ],
    benefits: [
      'Work with existing structure',
      'Cost-effective transformation',
      'Modern updates to older homes',
      'Increase property value',
      'Preserve character while adding function',
    ],
    cta: 'Start Your Renovation Journey',
  },
  {
    id: 'roofing',
    title: 'Roofing & Siding',
    shortDescription: 'Weather-resistant exterior solutions',
    description:
      "Protect your investment with quality roofing and siding services. We use durable, weather-resistant materials built for Atlantic Canada's climate.",
    icon: Warehouse,
    features: [
      'Asphalt shingle installation',
      'Metal roofing systems',
      'Flat roof solutions',
      'Vinyl and fiber cement siding',
      'Soffit and fascia installation',
      'Exterior trim and finishing',
    ],
    benefits: [
      'Weather-resistant materials',
      'Warranty-backed installations',
      'Free roof inspections',
      'Insurance claim assistance',
      'Energy-efficient options',
    ],
    cta: 'Get a Free Roofing Quote',
  },
  {
    id: 'concrete',
    title: 'Concrete & Foundations',
    shortDescription: 'Solid foundations for lasting structures',
    description:
      'Strong foundations are the key to lasting structures. Our concrete specialists deliver precision work that stands the test of time.',
    icon: Box,
    features: [
      'Foundation excavation and pouring',
      'Basement construction',
      'Concrete driveways and walkways',
      'Retaining walls',
      'Stamped and decorative concrete',
      'Foundation repairs and waterproofing',
    ],
    benefits: [
      'Engineered for Nova Scotia soil',
      'Proper drainage solutions',
      'Waterproofing expertise',
      'Load-bearing calculations',
      'Long-lasting durability',
    ],
    cta: 'Request Foundation Consultation',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    shortDescription: 'End-to-end project coordination',
    description:
      'Let us handle the complexity of your construction project. Our experienced project managers coordinate every detail from permits to final inspection.',
    icon: ClipboardList,
    features: [
      'Complete project coordination',
      'Permit acquisition and compliance',
      'Subcontractor management',
      'Timeline and budget oversight',
      'Quality control inspections',
      'Client communication and updates',
    ],
    benefits: [
      'Single point of contact',
      'Stress-free experience',
      'On-time delivery',
      'Budget adherence',
      'Professional documentation',
    ],
    cta: 'Learn About Our Process',
  },
  
]

export default services
