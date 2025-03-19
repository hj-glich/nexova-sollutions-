
import { Globe, Smartphone, Layout, Code, Calendar, MessageSquare } from 'lucide-react';

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Web':
    case 'E-commerce':
      return Globe;
    case 'Mobile':
    case 'Health & Wellness':
      return Smartphone;
    case 'Design':
    case 'Marketplace':
      return Layout;
    case 'Development':
    case 'Finance':
      return Code;
    case 'Sustainability':
    case 'Transportation':
      return Calendar;
    default:
      return MessageSquare;
  }
};

export const getCategoryBackground = (category: string) => {
  const gradients: Record<string, string> = {
    'E-commerce': 'from-purple-100 to-indigo-100',
    'Health & Wellness': 'from-green-100 to-teal-100',
    'Sustainability': 'from-emerald-100 to-green-100',
    'Transportation': 'from-blue-100 to-sky-100',
    'Marketplace': 'from-amber-100 to-yellow-100',
    'Finance': 'from-slate-100 to-gray-100',
  };

  const gradient = gradients[category] || 'from-purple-100 to-blue-100';
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`}></div>
  );
};

export const getCardLayout = (index: number) => {
  const layouts = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-2",
  ];
  return layouts[index % layouts.length];
};
