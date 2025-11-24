import React from 'react';
import { Laptop, Wifi, CloudCog } from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: "Device Management",
    description: "Keeping your workstations, laptops, and mobile devices updated, secure, and monitored for peak performance.",
    features: ["Workstation Management", "Security Updates", "Remote Monitoring", "Device Provisioning"]
  },
  {
    icon: Wifi,
    title: "Network Management",
    description: "Robust networking solutions that ensure your business stays connected with speed and security.",
    features: ["Router Configuration", "WiFi Optimization", "Firewall Security", "Connectivity Troubleshooting"]
  },
  {
    icon: CloudCog,
    title: "Cloud System Management",
    description: "Seamless cloud integration and management for modern, flexible business operations.",
    features: ["Microsoft 365 & Google Workspace", "Access Control", "Cloud Backups", "Data Security"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-4">
            Reliable Tech Solutions
          </h2>
          <p className="text-gray-600">
            We provide comprehensive support tailored to the unique needs of local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-6">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-darkGray mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;