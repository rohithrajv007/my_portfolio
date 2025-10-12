// ContactPage.jsx - Updated with Web3Forms integration

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Check, Loader2 } from 'lucide-react'; // Added Loader2 for loading state
import { motion } from 'framer-motion';

export default function ContactPage() {
  // Use a more robust state to handle different stages of submission
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  // --- THIS IS THE KEY FUNCTION THAT SENDS THE DATA ---
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');

    // Create a FormData object to send to the API
    const formData = new FormData(e.target);
    formData.append("access_key", "2e9b91b1-28d0-46c5-9a38-f24f634a4dcc"); // ❗ Replace with your actual key from Web3Forms

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionStatus('success');
        // Clear form after a delay
        setTimeout(() => {
          setFormState({ name: '', email: '', message: '' });
          setSubmissionStatus('idle');
        }, 3000);
      } else {
        console.error("Error submitting form:", data);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      setSubmissionStatus('error');
    }
  };

  // Helper function to render the button's content
  const renderButtonContent = () => {
    switch (submissionStatus) {
      case 'loading':
        return (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
          </span>
        );
      case 'success':
        return (
          <motion.span
            className="flex items-center justify-center gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <Check className="w-5 h-5" /> Message Sent!
          </motion.span>
        );
      case 'error':
        return (
          <span className="flex items-center justify-center gap-2">
            Error! Try again.
          </span>
        );
      default: // 'idle' state
        return (
          <span className="flex items-center justify-center gap-2">
            <Send className="w-5 h-5" /> Send Message
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* ... your header section remains the same ... */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8">
            Get In Touch
          </h1>
          <p className="text-slate-400 text-lg">Let's connect and explore opportunities for collaboration</p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"
            layoutId="underline"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 2xl:gap-12">
          {/* ... your contact info section remains the same ... */}
          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 2xl:p-12 border border-slate-700 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Mail, label: 'Email', value: 'rajrohith.003@gmail.com', href: 'mailto:rajrohith.003@gmail.com' },
              { icon: null, label: 'Phone', value: '+91 63619 39226', href: 'tel:+916361939226' },
              { icon: null, label: 'Location', value: 'Bengaluru, Karnataka, India', href: null }
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  {contact.icon && <contact.icon className="w-5 h-5" />}
                  {contact.label}
                </h3>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-slate-300 hover:text-cyan-400 transition text-lg"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-slate-300 text-lg">{contact.value}</p>
                )}
              </motion.div>
            ))}

            <motion.div
              className="pt-6 border-t border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/rohithrajv007' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/rohith-v-raj' },
                  { icon: Mail, href: 'mailto:rajrohith.003@gmail.com' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-700/50 hover:bg-cyan-500/20 hover:border-cyan-500 border border-slate-600 rounded-lg transition"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleContactSubmit}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 2xl:p-12 border border-slate-700 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Input for name */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
              <label className="block text-sm font-semibold text-cyan-400 mb-2">Name</label>
              <motion.input
                type="text"
                name="name" // Add name attribute
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:border-cyan-500 transition placeholder-slate-500 focus:outline-none"
                placeholder="Your name"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
            
            {/* Input for email */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
              <label className="block text-sm font-semibold text-cyan-400 mb-2">Email</label>
              <motion.input
                type="email"
                name="email" // Add name attribute
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:border-cyan-500 transition placeholder-slate-500 focus:outline-none"
                placeholder="your.email@example.com"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Input for message */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
              <label className="block text-sm font-semibold text-cyan-400 mb-2">Message</label>
              <motion.textarea
                name="message" // Add name attribute
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:border-cyan-500 transition placeholder-slate-500 focus:outline-none resize-none"
                placeholder="Your message..."
                rows="5"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className={`w-full py-3 sm:py-4 lg:py-5 2xl:py-6 rounded-lg font-semibold transition transform text-sm sm:text-base lg:text-lg ${
                submissionStatus === 'success' ? 'bg-green-500 text-white' :
                submissionStatus === 'error' ? 'bg-red-500 text-white' :
                'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
              }`}
              disabled={submissionStatus === 'loading'}
              whileHover={submissionStatus !== 'loading' && submissionStatus !== 'success' ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              {renderButtonContent()}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
