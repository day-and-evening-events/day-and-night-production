
import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Renu Singh Chandel",
      role: "Managing Director (MD)",
      bio: "Visionary leader guiding Day and Night Productions with extensive experience in event management and cultural celebrations.",
      image: "/festival/mom.jpeg"
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
      role: "Chief Technical Officer (CTO)",
      bio: "Technical wizard who ensures our events feature cutting-edge sound, lighting, and effects for an unforgettable experience.",
      image: "/festival/kartik.jpeg"
    },
    {
      name: "Saakhi Sharma",
      role: "Project Designer",
      bio: "Talented designer with an eye for aesthetics who creates visually stunning event environments that capture our cultural essence.",
      image: "/festival/sakhi.jpeg"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-festival-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Meet The Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            The passionate individuals behind Day and Night Productions
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-festival-red font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
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
