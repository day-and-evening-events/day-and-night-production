
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader 
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Renu Singh Chandel",
      role: "Managing Director (MD)",
      bio: "Visionary leader guiding Day and Night events with extensive experience in event management and cultural celebrations.",
      image: "/festival/mom.png"
    },
    {
      name: "Raghuvansh Singh Chandel",
      role: "Chief Executive Officer (CEO)",
      bio: "Strategic planner who oversees all company operations, ensuring our events exceed expectations while maintaining our cultural values.",
      image: "/festival/raghu.jpeg"
    },
    {
      name: "Vanshaj Singh Chandel",
      role: "Project Designer",
      bio: "Creative mind behind our event concepts, focused on creating immersive and authentic cultural experiences for our audiences.",
      image: "/festival/vanshaj.jpeg"
    },
    {
      name: "Amaan Ghizali",
      role: "Chief Development Officer",
      bio: "Responsible for developing new business opportunities and partnerships that align with our mission of cultural celebration.",
      image: "/festival/amaan.jpeg"
    },
    {
      name: "Kartikey Kumar",
      role: "Co Chief Technical Officer(Co-CTO)",
      bio: "Technical wizard who ensures our events feature cutting-edge sound, lighting, and effects for an unforgettable experience.",
      image: "/festival/kartik.jpg"
    },
    {
      name: "Priyansh Barya",
      role: "Co Chief Technical Officer(Co-CTO)",
      bio: "Behind the lights and music stands a tech genius who turns vision into seamless reality.",
      image: "/festival/barya_brdr.jpeg"
    },
    {
      name: "Saakhi Sharma",
      role: "Project Designer",
      bio: "Talented designer with an eye for aesthetics who creates visually stunning event environments that capture our cultural essence.",
      image: "/festival/sakhi.jpeg"
    },
    {
      name: "Prakhar Srivastava",
      role: "Promotion & Operations Manager",
      bio: "Responsible for driving marketing campaigns and coordinating event logistics for seamless execution.",
      image: "/festival/prakhar.jpeg"
    },
    {
      name: "Prateek Awasthi",
      role: "Tech Manager",
      bio: "Ensures reliability of all technical systems and manages live-event tech support.",
      image: "/festival/prateek.jpeg"
    },

  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-festival-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Meet The Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            The passionate individuals behind Day and Night events
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="relative">
                  <AspectRatio ratio={3/4} className="bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </AspectRatio>
                </div>
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-festival-red font-medium text-sm">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Join Our Team</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Passionate about events and cultural experiences? We're always looking for talented individuals to join our growing team.
          </p>
          <button className="btn-festival">View Open Positions</button>
        </div>
      </section>
    </div>
  );
};

export default Team;
