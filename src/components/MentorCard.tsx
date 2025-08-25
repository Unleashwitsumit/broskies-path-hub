import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MentorCardProps {
  name: string;
  role: string;
  expertise: string;
  experience: string;
  avatar?: string;
  className?: string;
}

export const MentorCard: React.FC<MentorCardProps> = ({
  name,
  role,
  expertise,
  experience,
  avatar,
  className = ""
}) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <div className={`group bg-card hover:bg-card-hover border border-border rounded-xl p-6 card-hover shadow-brand-sm hover:shadow-brand-md transition-all duration-300 ${className}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <Avatar className="w-20 h-20 group-hover:scale-110 transition-transform duration-300">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-lg">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="space-y-2">
          <h3 className="text-xl font-display font-semibold text-foreground">
            {name}
          </h3>
          <p className="text-primary font-medium">
            {role}
          </p>
          <p className="text-sm text-muted-foreground">
            {expertise}
          </p>
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 p-4 bg-accent/30 rounded-lg">
          <p className="text-sm text-foreground font-medium">
            {experience}
          </p>
        </div>
      </div>
    </div>
  );
};