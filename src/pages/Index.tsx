import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ValueCard } from '@/components/ValueCard';
import { MentorCard } from '@/components/MentorCard';
import { InternshipCard } from '@/components/InternshipCard';
import { 
  Rocket, 
  Users, 
  Code, 
  Award, 
  ExternalLink, 
  Star,
  ChevronRight,
  Mail,
  MessageCircle,
  Linkedin,
  Instagram
} from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToInternships = () => {
    document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' });
  };

  const valueProps = [
    {
      icon: Users,
      title: "Real Industry Mentors 👨‍🏫",
      description: "Learn from experienced professionals currently working in top tech companies with proven track records."
    },
    {
      icon: Code,
      title: "Live Projects & Hands-On Learning 💻",
      description: "Build real-world projects that you can showcase in your portfolio and use during job interviews."
    },
    {
      icon: Rocket,
      title: "Direct Career Path Support 🎯",
      description: "Get personalized guidance on resume building, interview preparation, and job placement assistance."
    },
    {
      icon: Award,
      title: "Internship Certificate + Future Opportunities 📜",
      description: "Receive verified certificates and access to exclusive job opportunities through our industry network."
    }
  ];

  const mentors = [
    {
      name: "Shafqat Ahmed",
      role: "Senior Full Stack Developer",
      expertise: "Web Development Mentor",
      experience: "5+ years at Microsoft, specialized in React & Node.js. Has mentored 200+ students into successful careers."
    },
    {
      name: "Priya Sharma",
      role: "Data Science Lead",
      expertise: "Python & AI/ML Mentor",
      experience: "7+ years at Google, expert in machine learning algorithms. Published researcher with 15+ papers."
    },
    {
      name: "Rajesh Kumar",
      role: "Backend Architect",
      expertise: "Java & System Design Mentor",
      experience: "8+ years at Amazon, built scalable systems handling millions of users. Senior technical interviewer."
    },
    {
      name: "Sneha Gupta",
      role: "Database Specialist",
      expertise: "SQL & Database Mentor",
      experience: "6+ years at Oracle, database optimization expert. Helped companies reduce query time by 90%."
    }
  ];

  const internships = [
    {
      title: "Python Internship",
      description: "Master Python programming, data structures, and build real-world applications. Perfect for beginners and advanced learners.",
      whatsappLink: "https://wa.me/+919876543210?text=Hi, I want to join the Python Internship group!"
    },
    {
      title: "Java Internship", 
      description: "Learn Java fundamentals, OOP concepts, and enterprise application development with Spring Boot framework.",
      whatsappLink: "https://wa.me/+919876543210?text=Hi, I want to join the Java Internship group!"
    },
    {
      title: "Web Development Internship",
      description: "Full-stack web development with HTML, CSS, JavaScript, React, and Node.js. Build modern web applications.",
      whatsappLink: "https://wa.me/+919876543210?text=Hi, I want to join the Web Development Internship group!"
    },
    {
      title: "SQL Internship",
      description: "Master database management, complex queries, and data analysis. Learn MySQL, PostgreSQL, and MongoDB.",
      whatsappLink: "https://wa.me/+919876543210?text=Hi, I want to join the SQL Internship group!"
    },
    {
      title: "AI/ML Internship",
      description: "Dive into artificial intelligence and machine learning. Build predictive models and work with real datasets.",
      whatsappLink: "https://wa.me/+919876543210?text=Hi, I want to join the AI/ML Internship group!"
    }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      college: "IIT Delhi",
      rating: 5,
      text: "This internship helped me land freelance work within 1 month! The mentors are amazing and the projects are industry-relevant."
    },
    {
      name: "Kavya Reddy",
      college: "BITS Pilani",  
      rating: 5,
      text: "Best decision ever! Got placed in a startup before my final year. The hands-on learning approach is incredible."
    },
    {
      name: "Rohit Singh",
      college: "NIT Trichy",
      rating: 5,
      text: "From zero coding knowledge to building full-stack apps in 3 months. BroskiesHub changed my career trajectory!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 31, 68, 0.9), rgba(10, 31, 68, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-on-scroll">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Don't Just Graduate,{' '}
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Get Hired
              </span>{' '}
              🚀
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join India's most practical, mentor-led internship bootcamps designed to make you industry ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToInternships}
                className="font-display text-xl px-12 py-6 float-animation"
              >
                Join Internship Group
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted by 500+ Students from 30+ Colleges
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mt-12">
              {['IIT Delhi', 'BITS Pilani', 'NIT Trichy', 'VIT', 'IIIT Hyderabad', 'DTU'].map((college, idx) => (
                <div key={idx} className="px-6 py-3 bg-card rounded-lg shadow-brand-sm font-medium text-foreground">
                  {college}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-brand-sm animate-on-scroll">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Why Choose BroskiesHub Internships?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {valueProps.map((prop, idx) => (
              <ValueCard
                key={idx}
                icon={prop.icon}
                title={prop.title}
                description={prop.description}
                className="animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Learn from Industry Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our mentors are currently working in top tech companies and have years of real-world experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {mentors.map((mentor, idx) => (
              <MentorCard
                key={idx}
                name={mentor.name}
                role={mentor.role}
                expertise={mentor.expertise}
                experience={mentor.experience}
                className="animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOMO Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Seats Are Filling Fast ⏳
            </h2>
            
            <div className="bg-card border border-border rounded-2xl p-8 shadow-brand-md mb-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-muted-foreground">Groups Filled</span>
                  <span className="text-sm font-bold text-primary">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                  <div 
                    ref={progressRef}
                    className="h-4 bg-gradient-to-r from-primary to-primary-light progress-fill rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">
                Don't miss the chance to learn from industry mentors. Limited WhatsApp groups available!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Options Section */}
      <section id="internships" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Choose Your Internship Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the technology track that aligns with your career goals and join the respective WhatsApp group to start learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {internships.map((internship, idx) => (
              <InternshipCard
                key={idx}
                title={internship.title}
                description={internship.description}
                whatsappLink={internship.whatsappLink}
                className="animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Our Mission 💡
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We started BroskiesHub to empower students with practical skills that go beyond textbooks. 
              We believe every student deserves the chance to learn, build, and get hired — before they graduate. 
              Our mentor-led approach ensures you gain real industry experience while building a strong professional network.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Your Future Starts Today. Are You Ready?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join your internship group now and start your journey to become industry-ready.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {internships.slice(0, 5).map((internship, idx) => (
                <Button
                  key={idx}
                  variant="cta-outline"
                  size="lg"
                  onClick={() => window.open(internship.whatsappLink, '_blank')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                >
                  Join {internship.title.split(' ')[0]} Group
                  <ExternalLink className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold">BroskiesHub</h3>
              <p className="text-primary-foreground/80">
                Empowering students with practical skills and industry experience.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">Home</a>
                <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">About</a>
                <a href="#internships" className="block text-primary-foreground/80 hover:text-white transition-colors">Internships</a>
                <a href="#internships" className="block text-primary-foreground/80 hover:text-white transition-colors">Join Now</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@broskieshub.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 text-center text-primary-foreground/60">
            <p>&copy; 2024 BroskiesHub. All rights reserved. | Made with ❤️ for students</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;