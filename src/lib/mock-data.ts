import type { Institute, BlogPost, Event } from './types';

export const mockInstitutes: Institute[] = [
  {
    id: '1',
    name: 'Global Tech University',
    logoUrl: 'https://placehold.co/100x100.png',
    country: 'United Kingdom',
    description: 'A leading institution in technology and engineering education.',
    courses: ['Computer Science', 'Data Analytics', 'AI & Machine Learning'],
  },
  {
    id: '2',
    name: 'London School of Business',
    logoUrl: 'https://placehold.co/100x100.png',
    country: 'United Kingdom',
    description: 'Premier business school offering MBA and finance programs.',
    courses: ['MBA', 'Finance', 'International Business'],
  },
  {
    id: '3',
    name: 'Cambridge Arts College',
    logoUrl: 'https://placehold.co/100x100.png',
    country: 'United Kingdom',
    description: 'Renowned for its vibrant arts and humanities programs.',
    courses: ['Fine Arts', 'History of Art', 'Modern Languages'],
  },
  {
    id: '4',
    name: 'European Engineering Institute',
    logoUrl: 'https://placehold.co/100x100.png',
    country: 'Germany',
    description: 'A top-ranked institute for mechanical and electrical engineering.',
    courses: ['Mechanical Engineering', 'Electrical Engineering', 'Robotics'],
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-accreditation',
    title: 'The Future of Higher Education Accreditation',
    author: 'Dr. Jane Doe',
    date: '2024-07-15',
    imageUrl: 'https://placehold.co/600x400.png',
    excerpt: 'Exploring how technology and global standards are shaping the future of university accreditation.',
    content: '<p>The world of higher education is undergoing a seismic shift. In this article, we delve into the trends that are redefining what it means for an institution to be accredited in the 21st century.</p>',
  },
  {
    slug: 'why-choose-ukcas',
    title: 'Why a UKCAS Accreditation Matters for Your Institute',
    author: 'John Smith',
    date: '2024-06-28',
    imageUrl: 'https://placehold.co/600x400.png',
    excerpt: 'A UKCAS accreditation is more than a badge; it\'s a commitment to excellence and a passport to global recognition.',
    content: '<p>Learn about the rigorous standards and benefits that come with a UKCAS accreditation, and how it can elevate your institution\'s profile on the world stage.</p>',
  },
];

export const mockEvents: Event[] = [
  {
    slug: 'global-education-summit-2024',
    title: 'Global Education Summit 2024',
    date: '2024-11-05',
    location: 'London, UK',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Join education leaders from around the world to discuss the future of learning and international collaboration.',
  },
  {
    slug: 'accreditation-standards-workshop',
    title: 'Workshop on New Accreditation Standards',
    date: '2024-09-20',
    location: 'Online',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A virtual workshop for institutes preparing for the new 2025 UKCAS accreditation standards.',
  },
];
