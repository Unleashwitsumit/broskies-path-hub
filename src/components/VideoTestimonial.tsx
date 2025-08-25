import React from 'react';
import { Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoTestimonialProps {
  name: string;
  college: string;
  course: string;
  rating: number;
  text: string;
  videoThumbnail?: string;
  className?: string;
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  name,
  college,
  course,
  rating,
  text,
  videoThumbnail,
  className = ""
}) => {
  const handlePlayVideo = () => {
    // Placeholder for video play functionality
    console.log(`Playing video testimonial for ${name}`);
  };

  return (
    <div className={`bg-card border border-border rounded-xl p-6 shadow-brand-sm hover:shadow-brand-md transition-all duration-300 ${className}`}>
      {/* Video Thumbnail */}
      <div className="relative mb-4 aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer" onClick={handlePlayVideo}>
        {videoThumbnail ? (
          <img 
            src={videoThumbnail} 
            alt={`${name} testimonial video`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-primary-foreground">
                  {name.charAt(0)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Video Testimonial</p>
            </div>
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="icon" className="w-16 h-16 rounded-full">
            <Play className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-warning text-warning" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-foreground mb-4 italic">"{text}"</p>

      {/* Student Info */}
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{college}</p>
        <p className="text-sm text-primary font-medium">{course} Internship</p>
      </div>
    </div>
  );
};