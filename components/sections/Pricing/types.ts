import { LucideIcon } from 'lucide-react';

export interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  popular: boolean;
  tag: string;
}
