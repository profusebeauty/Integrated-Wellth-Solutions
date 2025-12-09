import { LucideIcon } from 'lucide-react';

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface Audience {
  id: string;
  title: string;
  description: string;
  services: string[];
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}
