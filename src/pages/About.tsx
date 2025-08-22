
import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-festival-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Day and Night events - Creating vibrant cultural experiences since 2015
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Day and Night events, our mission is to create vibrant cultural experiences that celebrate and uplift local talent while fostering community connections through unforgettable events.
            </p>
            <p className="text-lg text-gray-700">
              Founded in 2015 by a group of passionate event enthusiasts, we've grown from humble beginnings hosting small community gatherings to producing some of North India's most anticipated cultural celebrations, including our flagship event - Lucknow Dandiya Nights.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="festival-card">
              <h3 className="text-xl font-bold mb-3">Cultural Authenticity</h3>
              <p className="text-gray-600">
                We remain true to the cultural roots and traditions of the events we produce, ensuring authentic experiences while adding modern innovations.
              </p>
            </div>

            <div className="festival-card">
              <h3 className="text-xl font-bold mb-3">Community Impact</h3>
              <p className="text-gray-600">
                Every event we organize aims to create positive community impact by bringing people together, supporting local businesses, and showcasing local talent.
              </p>
            </div>

            <div className="festival-card">
              <h3 className="text-xl font-bold mb-3">Creative Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every aspect of our events, from production quality to participant experience, raising the bar with each celebration we host.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto mt-10 space-y-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="text-2xl font-bold text-festival-red">2021</div>
                <div className="text-lg font-semibold">Beginning Our Journey</div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700">
                  Started our journey in event management, advertisement production, and wedding event business, building our expertise and connections in the industry.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="text-2xl font-bold text-festival-yellow">2023</div>
                <div className="text-lg font-semibold">First Dandiya Night</div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700">
                  Organized our first Dandiya Night in Lucknow in partnership which gave us valuable experience.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="text-2xl font-bold text-festival-teal">2024</div>
                <div className="text-lg font-semibold">Growing Experience</div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700">
                  Continued our partnership for events in Lucknow, gaining more experience but still feeling limited in expressing our full creative vision for the event.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="text-2xl font-bold text-festival-purple">2025</div>
                <div className="text-lg font-semibold">Season 1 - Full Creative Control</div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700">
                  Launching our first independent Dandiya Night as Season 1, with full creative control under our event company, allowing us to create a truly authentic and unforgettable cultural experience for lucknow city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-festival-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Interested in sponsoring our events or collaborating with Day and Night events? We'd love to hear from you!
          </p>
          <button className="bg-white text-festival-red font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
