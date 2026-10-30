/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Trainer } from './components/Trainer';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { EnquiryForm } from './components/EnquiryForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [selectedGoal, setSelectedGoal] = useState<string>('Muscle Gain');

  const handleSelectService = (serviceTitle: string) => {
    // Map service to closest fitness goal
    if (serviceTitle.includes('Strength')) {
      setSelectedGoal('Strength');
    } else if (serviceTitle.includes('Cardio') || serviceTitle.includes('Weight')) {
      setSelectedGoal('Weight Loss');
    } else if (serviceTitle.includes('Personal')) {
      setSelectedGoal('Muscle Gain');
    } else {
      setSelectedGoal('General Fitness');
    }

    const el = document.querySelector('#enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTrainWithMohsin = () => {
    setSelectedGoal('Muscle Gain');
    const el = document.querySelector('#enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinClick = () => {
    const el = document.querySelector('#enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.querySelector('#about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-[#FF5A1F] selection:text-white">
      {/* Sticky Top Bar Navigation */}
      <Navbar onJoinClick={handleJoinClick} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onJoinClick={handleJoinClick} onExploreClick={handleExploreClick} />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Our Fitness Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Trainer Section */}
        <Trainer onTrainClick={handleTrainWithMohsin} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Gym Gallery Section */}
        <Gallery />

        {/* 7. Member Reviews Section */}
        <Reviews />

        {/* 8. Membership Enquiry Section */}
        <EnquiryForm initialGoal={selectedGoal} />

        {/* 9. Contact Us Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
