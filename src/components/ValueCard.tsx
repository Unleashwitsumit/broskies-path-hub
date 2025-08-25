import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`group bg-card hover:bg-card-hover border border-border rounded-xl p-6 card-hover shadow-brand-sm hover:shadow-brand-md transition-all duration-300 ${className}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-accent/50 rounded-full group-hover:bg-primary/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-display font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};