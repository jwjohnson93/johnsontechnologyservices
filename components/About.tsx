import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
          Who We Are
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-8">
          About Johnson Technology Services
        </h2>
        <div className="mx-auto text-gray-600 text-lg leading-relaxed max-w-4xl flex flex-col gap-6">
          <p>
            Johnson Technology Services is a Greenville, North Carolina–based technology support provider serving businesses across Pitt County.
          </p>
          <p>
            We help small and mid-sized organizations stay secure, connected, and productive with reliable, modern technology solutions.
          </p>
          <p>
            Our approach is friendly, professional, and focused on long-term reliability — so you can focus on running your business while we handle the tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;