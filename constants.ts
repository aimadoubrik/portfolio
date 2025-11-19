import { Project, BlogPost, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'Real-time analytics platform visualizing massive datasets.',
    fullDescription: 'A high-performance dashboard built with React and D3.js to visualize terabytes of streaming data in real-time. Features include customizable widgets, dark mode, and WebSocket integration for live updates.',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Echo Chat AI',
    description: 'LLM-powered chat interface with context retention.',
    fullDescription: 'An intelligent chat application leveraging the Gemini API. It supports multi-turn conversations, code syntax highlighting, and custom system instructions for persona switching.',
    tags: ['Next.js', 'Gemini API', 'Tailwind', 'Redis'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Vortex Commerce',
    description: 'Headless e-commerce storefront with sub-second load times.',
    fullDescription: 'A headless e-commerce solution connecting to Shopify. Optimized for core web vitals using edge caching and image optimization strategies.',
    tags: ['Remix', 'Shopify', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    liveUrl: 'https://example.com',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering React Hooks',
    excerpt: 'A deep dive into useEffect, useCallback, and useMemo to avoid performance pitfalls.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    content: `
# Mastering React Hooks

React Hooks have revolutionized how we write components. However, they come with their own set of challenges.

## The Dependency Array

The most common source of bugs is the dependency array in \`useEffect\`. Always ensure all variables used inside the effect are declared.

\`\`\`javascript
useEffect(() => {
  console.log(count);
}, [count]);
\`\`\`

## Memoization

Use \`useMemo\` only when the calculation is expensive.
    `
  },
  {
    id: '2',
    title: 'The Future of AI in Web Dev',
    excerpt: 'How LLMs like Gemini are changing the way we build and deploy applications.',
    date: 'Nov 05, 2023',
    readTime: '4 min read',
    content: 'AI is not just a buzzword...'
  },
  {
    id: '3',
    title: 'Tailwind CSS: Utility-First',
    excerpt: 'Why I switched from CSS-in-JS to utility classes and never looked back.',
    date: 'Dec 01, 2023',
    readTime: '6 min read',
    content: 'Tailwind simplifies the mental model of styling...'
  }
];

export const SKILLS = [
  'TypeScript', 'React', 'Node.js', 'Next.js', 
  'Tailwind CSS', 'Gemini API', 'PostgreSQL', 'Docker', 
  'AWS', 'GraphQL', 'Framer Motion', 'Git'
];
