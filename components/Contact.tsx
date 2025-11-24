import React, { useState } from 'react';
import Button from './Button';
import { Mail, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-5">
          
          {/* Info Side */}
          <div className="bg-primary text-white p-6 md:p-8 lg:p-10 lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Need reliable tech support? Fill out the form or email us directly. We’re here to help your business thrive.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 text-blue-200 shrink-0" size={20} />
                  <div className="overflow-hidden">
                    <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">Email</p>
                    <a href="mailto:jeremy@johnsontechnologyservices.com" className="hover:text-white transition-colors text-[11px] sm:text-xs font-medium whitespace-nowrap block">
                      jeremy@johnsontechnologyservices.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
               <p className="text-sm text-blue-200">
                 Serving Greenville and Pitt County, North Carolina
               </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-6 md:p-8 lg:p-10 lg:col-span-3 bg-white">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-darkGray mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-primary font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea 
                    id="message" 
                    required 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your technology needs..."
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  We’ll get back to you as soon as possible.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;