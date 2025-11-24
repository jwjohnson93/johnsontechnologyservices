import React from 'react';
import Button from './Button';
import { Network, ShieldCheck, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-darkGray tracking-tight">
              Professional Technology Solutions for <span className="text-primary">Pitt County</span> Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Johnson Technology Services provides reliable, friendly support for all your technology needs — from device management to networks and cloud systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="#contact" variant="primary" className="w-full sm:w-auto">
                Contact Us
              </Button>
              <Button href="#services" variant="secondary" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column: Abstract Tech Visual */}
          <div className="relative hidden lg:flex justify-center items-center">
             {/* Decorative blob background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            
            <div className="relative grid grid-cols-2 gap-6 p-8">
               <div className="space-y-6 mt-12">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center w-48 hover:translate-y-[-5px] transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-primary">
                      <Network size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900">Network</h3>
                    <p className="text-xs text-gray-500 mt-2">Secure & Fast</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center w-48 hover:translate-y-[-5px] transition-transform duration-300">
                     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-primary">
                      <ShieldCheck size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900">Security</h3>
                    <p className="text-xs text-gray-500 mt-2">Always Protected</p>
                  </div>
               </div>
               <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center w-48 hover:translate-y-[-5px] transition-transform duration-300">
                     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-primary">
                      <Cloud size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900">Cloud</h3>
                    <p className="text-xs text-gray-500 mt-2">Reliable Storage</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;