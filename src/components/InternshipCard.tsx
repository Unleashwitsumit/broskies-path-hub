import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface InternshipCardProps {
  title: string;
  description: string;
  whatsappLink: string;
  className?: string;
}

export const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  description,
  whatsappLink,
  className = ""
}) => {
  const handleJoinGroup = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className={`group bg-card hover:bg-card-hover border border-border rounded-xl p-8 card-hover shadow-brand-sm hover:shadow-brand-md transition-all duration-300 ${className}`}>
      <div className="flex flex-col h-full">
        <div className="flex-1 space-y-4 mb-6">
          <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <Button 
          variant="whatsapp" 
          size="lg" 
          onClick={handleJoinGroup}
          className="w-full group-hover:scale-105 transition-transform duration-300"
        >
          Join {title.split(' ')[0]} Group
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};