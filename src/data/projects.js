/**
 * Projects Data
 * All portfolio projects for easy editing
 */

export const projects = [
  {
    id: 1,
    title: 'Modern Halifax Custom Home',
    location: 'Halifax, NS',
    category: 'residential',
    completion: '2024',
    description:
      "A stunning 3,200 sq ft custom home featuring an open-concept design, floor-to-ceiling windows, and sustainable building materials. This project showcases modern architecture while respecting the neighborhood's character.",
    services: ['Custom Home Build', 'Interior Finishing', 'Landscaping'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        alt: 'Modern custom home exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
        alt: 'Open concept kitchen',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        alt: 'Living room with large windows',
      },
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Downtown Dartmouth Office Renovation',
    location: 'Dartmouth, NS',
    category: 'commercial',
    completion: '2024',
    description:
      'Complete transformation of a 5,000 sq ft office space for a growing tech startup. Modern aesthetic with collaborative workspaces, private offices, and a stylish reception area.',
    services: ['Commercial Renovation', 'Electrical', 'HVAC'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        alt: 'Modern office reception',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
        alt: 'Open workspace area',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
        alt: 'Conference room',
      },
    ],
    featured: true,
  },
  {
    id: 3,
    title: 'Bedford Kitchen & Bath Remodel',
    location: 'Bedford, NS',
    category: 'renovations',
    completion: '2024',
    description:
      'A dated 1980s home gets a modern makeover with a complete kitchen and master bathroom renovation. Custom cabinetry, quartz countertops, and spa-inspired bathroom design.',
    services: ['Kitchen Remodel', 'Bathroom Renovation'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
        alt: 'Modern kitchen renovation',
      },
      {
        url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
        alt: 'Bathroom renovation',
      },
    ],
    featured: true,
  },
  {
    id: 4,
    title: 'Commercial Roof Replacement',
    location: 'Halifax, NS',
    category: 'roofing',
    completion: '2024',
    description:
      'Complete roof replacement on a 15,000 sq ft commercial building. TPO membrane roofing system with improved insulation and drainage.',
    services: ['Commercial Roofing', 'Insulation'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=800&h=600&fit=crop',
        alt: 'Commercial building roofing',
      },
    ],
    featured: false,
  },
  {
    id: 5,
    title: 'Waterfront Home Addition',
    location: 'Eastern Passage, NS',
    category: 'residential',
    completion: '2023',
    description:
      '850 sq ft two-story addition featuring a main floor family room and second-floor master suite with ocean views. Seamlessly integrated with existing home.',
    services: ['Home Addition', 'Foundation', 'Roofing'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        alt: 'Waterfront home addition',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        alt: 'Home exterior view',
      },
    ],
    featured: true,
  },
  {
    id: 6,
    title: 'Restaurant Build-Out',
    location: 'Halifax, NS',
    category: 'commercial',
    completion: '2023',
    description:
      'Ground-up restaurant construction in downtown Halifax. Complete with commercial kitchen, dining area for 80 guests, and outdoor patio space.',
    services: ['Commercial Construction', 'Plumbing', 'Electrical'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
        alt: 'Restaurant interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
        alt: 'Restaurant dining area',
      },
    ],
    featured: false,
  },
  {
    id: 7,
    title: 'Heritage Home Restoration',
    location: 'Halifax, NS',
    category: 'renovations',
    completion: '2023',
    description:
      'Careful restoration of a 1920s heritage home, preserving original character while adding modern amenities. Work included structural repairs, new electrical, and period-appropriate finishes.',
    services: ['Heritage Restoration', 'Structural Repairs', 'Electrical'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
        alt: 'Heritage home exterior',
      },
    ],
    featured: false,
  },
  {
    id: 8,
    title: 'Concrete Foundation & Driveway',
    location: 'Cole Harbour, NS',
    category: 'foundations',
    completion: '2024',
    description:
      'New home foundation with full basement and custom stamped concrete driveway. Engineered for Nova Scotia soil conditions with comprehensive drainage system.',
    services: ['Foundation', 'Concrete Work', 'Drainage'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        alt: 'Foundation work',
      },
    ],
    featured: false,
  },
]

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'renovations', label: 'Renovations' },
  { id: 'roofing', label: 'Roofing' },
  { id: 'foundations', label: 'Foundations' },
]

export default projects
