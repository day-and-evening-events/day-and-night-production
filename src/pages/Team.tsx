
import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Founder & Creative Director",
      bio: "Former event planner with 15+ years of experience. Passionate about cultural events and creating memorable experiences for communities.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Priya Malhotra",
      role: "Co-founder & Operations Head",
      bio: "MBA graduate who brings structure and efficiency to our creative chaos. Expert in logistics and managing large-scale productions.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Vivek Kapoor",
      role: "Technical Director",
      bio: "Audio-visual production specialist with a background in theater. Creates immersive environments through innovative lighting and sound design.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Meera Patel",
      role: "Marketing Director",
      bio: "Digital marketing expert who has helped grow our social media presence from 5K to 1M+ followers in just three years.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Arjun Singh",
      role: "Talent Relations Manager",
      bio: "Former artist manager with extensive industry connections. Responsible for bringing top performers to our events.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Neha Gupta",
      role: "Community Engagement",
      bio: "Passionate about creating inclusive events. Works with local communities to ensure our celebrations reflect diverse cultural perspectives.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=300&q=80"
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
