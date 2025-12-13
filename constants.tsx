import { 
  Briefcase, 
  Brain, 
  TrendingUp, 
  Users, 
  FileCheck, 
  Target, 
  Building2, 
  HeartHandshake, 
  User, 
  GraduationCap 
} from 'lucide-react';
import { Pillar, Audience, Testimonial } from './types';

export const PILLARS: Pillar[] = [
  {
    id: 'financial',
    title: 'Financial Expertise',
    description: 'We handle the numbers so you can focus on the vision.',
    icon: TrendingUp,
    details: ['Tax Compliance (SARS, VAT, PAYE)', 'Bookkeeping & Systems', 'Investment Readiness', 'VAT Reconciliation']
  },
  {
    id: 'psychological',
    title: 'Psychological Wellness',
    description: 'Addressing the mindset behind the money.',
    icon: Brain,
    details: ['Stress Reduction', 'Emotional Intelligence', 'Resilience Coaching', 'Financial Anxiety Management']
  },
  {
    id: 'development',
    title: 'Personal & Professional Development',
    description: 'Growth strategies for individuals and leaders.',
    icon: Target,
    details: ['Career Guidance', 'Leadership Training', 'Accountability Partnerships', 'Personal Branding']
  },
  {
    id: 'organizational',
    title: 'Organizational Consulting',
    description: 'Building healthy, compliant, and strategic organizations.',
    icon: Building2,
    details: ['Strategy Development', 'Diversity Management', 'Labor Relations', 'Change Management']
  },
  {
    id: 'compliance',
    title: 'Compliance & Training',
    description: 'Ensuring your foundation is solid and legal.',
    icon: FileCheck,
    details: ['Statutory Compliance', 'Skills Development', 'Team Building Workshops', 'Governance']
  }
];

export const AUDIENCES: Audience[] = [
  {
    id: 'startups',
    title: 'Startups',
    description: 'Laying the foundation for scalable success.',
    services: ['CIPC Registration', 'BBBEE Certification', 'Business Plans', 'Google My Business Setup'],
    image: 'https://res.cloudinary.com/dka0498ns/image/upload/v1765292346/photo_5891266280851966839_x_wmn99a.jpg'
  },
  {
    id: 'existing',
    title: 'Existing Businesses',
    description: 'Optimizing operations for sustainable growth.',
    services: ['Growth Optimization', 'SARS Compliance Audits', 'Digital Marketing Strategy', 'Leadership Development'],
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'ngos',
    title: 'NGOs & NPOs',
    description: 'Empowering mission-driven organizations.',
    services: ['Grant Management', 'PBO Registration', 'Donor Reporting', 'Capacity Building'],
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'individuals',
    title: 'Individuals',
    description: 'Personal wealth and career mapping.',
    services: ['Financial Literacy & Debt Mgmt', 'Career Development', 'Life Coaching', 'Retirement Planning'],
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'teens',
    title: 'Teens & Students',
    description: 'Preparing the next generation for success.',
    services: ['Career Exploration', 'University Applications', 'Digital Literacy', 'Personal Branding'],
    image: 'https://picsum.photos/800/600?random=5'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Thabo M.",
    role: "Small Business Owner",
    text: "Integrated Wellth didn't just fix my books; they helped me overcome my anxiety about tax season. I finally feel in control."
  },
  {
    id: 2,
    name: "Sarah L.",
    role: "NPO Director",
    text: "Their understanding of grant management and PBO registration was a lifesaver for our organization. Truly holistic support."
  },
  {
    id: 3,
    name: "David K.",
    role: "Corporate Executive",
    text: "The combination of executive coaching and financial planning gave me a clear roadmap for my retirement."
  }
];

export const COMPANY_CONTEXT = `
You are the AI Assistant for "Integrated Wellth Solutions", a strategic consultancy based in Pretoria, Gauteng, founded by Marcia Kgaphola.
Your goal is to assist users by answering questions about the company's services, philosophy, and expertise.

Contact Details:
- Address: Fred Messenger Ave, Pretoria, Gauteng, South Africa.
- Phone: +27 (0) 81 235 5910.
- Email: enquiries@integratedwellth.co.za
- Website: www.integratedwellth.co.za
- Operational Hours: 08:00 AM - 16:30 PM

Core Philosophy:
- Combine financial expertise with behavioral psychology.
- Focus on "where you are going" (strategy) not just "where you have been" (history).
- Tagline: "Transforming lives through emotional, financial and personal wellness."

The 5 Pillars:
1. Financial Expertise (Tax, bookkeeping, investment readiness).
2. Psychological Wellness (Stress reduction, EQ, resilience).
3. Personal & Professional Development (Career guidance, leadership).
4. Organizational Consulting (Strategy, diversity, labor relations).
5. Compliance & Training (Statutory compliance, skills dev).

Target Audiences & Specific Services:
- Startups: CIPC, BBBEE, Business Plans.
- Existing Businesses: Growth, SARS Audits, VAT.
- NGOs/NPOs: Grant management, PBO registration.
- Individuals: Debt management, Life coaching.
- Teens: Career exploration, University applications.

Key Knowledge Base & 2026 Compliance Updates:
- Mandatory Income Tax Numbers: Employers MUST have a valid Income Tax Reference Number for every employee by the 2026 Employer Filing Season (Feb 2026). Submissions without these numbers will be REJECTED.
- VAT Rate: A rate increase to 16% was proposed for 1 April 2026, but subsequent legislation has proposed maintaining it at 15%. This is a developing story.
- eFiling Security: SARS is introducing mandatory biometric facial recognition for new eFiling registrations. Existing users must use Two-Factor Authentication (2FA).
- EMP501 Rejections: Unlike previous years, EMP501 reconciliations without employee tax numbers will be outright rejected, leading to non-compliance status.
- Disclaimer: You provide general information. For specific financial advice, users should be directed to book a consultation with the team.

Tone:
- Professional, empathetic, encouraging, and knowledgeable.
- Use "We" when referring to the company.
- If a user asks for specific financial advice, give general information based on the services but recommend booking a consultation for personalized advice.
`;