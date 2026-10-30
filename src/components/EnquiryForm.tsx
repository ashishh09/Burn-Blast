import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, PhoneCall, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface EnquiryFormProps {
  initialGoal?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialGoal = 'Muscle Gain' }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [gender, setGender] = useState('Male');
  const [fitnessGoal, setFitnessGoal] = useState(initialGoal);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const goalOptions = [
    'Muscle Gain',
    'Weight Loss',
    'Strength',
    'General Fitness',
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress.trim())) {
        newErrors.emailAddress = 'Please enter a valid email address.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format pre-filled WhatsApp message
    const formattedMessage = [
      `*New Membership Enquiry - Burn & Blast Gym* 🏋️`,
      `• *Name:* ${fullName.trim()}`,
      `• *Phone:* ${mobileNumber.trim()}`,
      emailAddress.trim() ? `• *Email:* ${emailAddress.trim()}` : null,
      gender ? `• *Gender:* ${gender}` : null,
      `• *Goal:* ${fitnessGoal}`,
      message.trim() ? `• *Message:* ${message.trim()}` : null,
      `\n_Sent via Burn & Blast Gym official website._`
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    setSubmitted(true);

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFullName('');
    setMobileNumber('');
    setEmailAddress('');
    setGender('Male');
    setFitnessGoal('Muscle Gain');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="enquiry" className="py-24 bg-[#0D0D0D] relative overflow-hidden border-t border-white/5">
      
      {/* Background neon ambient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5A1F]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest font-heading">
              JOIN THE REVOLUTION
            </span>
            <span className="w-8 h-0.5 bg-[#FF5A1F]" />
          </div>
          
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-4">
            YOUR TRANSFORMATION <br />
            <span className="text-[#FF5A1F]">STARTS TODAY.</span>
          </h2>

          <p className="font-heading text-lg sm:text-xl text-gray-300 font-semibold uppercase tracking-wide max-w-2xl mx-auto mb-2">
            One decision can change your fitness journey. Join Burn & Blast Gym and take your first step.
          </p>
          <p className="text-xs text-gray-500 max-w-md mx-auto">
            Fill out the details below. We connect directly with you on WhatsApp to discuss your goals and membership options.
          </p>
        </div>

        {/* Enquiry Card */}
        <div className="rounded-3xl bg-[#151515] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          
          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase">
                ENQUIRY SENT TO WHATSAPP!
              </h3>

              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{fullName}</span>. Your details have been formatted and directed to our trainer <span className="text-[#FF5A1F] font-semibold">{BUSINESS_INFO.trainerName}</span> at Burn & Blast Gym.
              </p>

              <div className="p-4 rounded-xl bg-[#1C1C1C] border border-white/5 max-w-sm mx-auto text-xs text-gray-400">
                <p>If WhatsApp didn&apos;t open automatically, click the button below to start chatting directly:</p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp (+91 88060 60605)</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-gray-400 hover:text-white underline cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Full Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Full Name <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#1F1F1F] text-white placeholder-gray-500 border ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#FF5A1F]'
                    } focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] text-sm transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Mobile Number <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                      +91
                    </span>
                    <input
                      id="mobileNumber"
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                      }}
                      placeholder="88060 60605"
                      maxLength={14}
                      className={`w-full pl-13 pr-4 py-3.5 rounded-xl bg-[#1F1F1F] text-white placeholder-gray-500 border ${
                        errors.mobileNumber ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#FF5A1F]'
                      } focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] text-sm transition-colors`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Row 2: Email & Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email Address */}
                <div>
                  <label htmlFor="emailAddress" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Email Address <span className="text-gray-500 text-[10px] lowercase">(optional)</span>
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={emailAddress}
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                      if (errors.emailAddress) setErrors({ ...errors, emailAddress: '' });
                    }}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#1F1F1F] text-white placeholder-gray-500 border ${
                      errors.emailAddress ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#FF5A1F]'
                    } focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] text-sm transition-colors`}
                  />
                  {errors.emailAddress && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.emailAddress}</span>
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="genderSelect" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Gender <span className="text-gray-500 text-[10px] lowercase">(optional)</span>
                  </label>
                  <select
                    id="genderSelect"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1F1F1F] text-white border border-white/10 focus:border-[#FF5A1F] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] text-sm transition-colors cursor-pointer"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Prefer not to say</option>
                  </select>
                </div>

              </div>

              {/* Fitness Goal Selection (Segmented Radio Chips) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                  Primary Fitness Goal <span className="text-[#FF5A1F]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {goalOptions.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setFitnessGoal(goal)}
                      className={`py-3 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                        fitnessGoal === goal
                          ? 'bg-[#FF5A1F] text-white border-[#FF5A1F] shadow-lg shadow-[#FF5A1F]/30 scale-[1.02]'
                          : 'bg-[#1F1F1F] text-gray-300 border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="messageInput" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Message / Questions <span className="text-gray-500 text-[10px] lowercase">(optional)</span>
                </label>
                <textarea
                  id="messageInput"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your fitness background, any injuries, or preferred timings..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1F1F1F] text-white placeholder-gray-500 border border-white/10 focus:border-[#FF5A1F] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] text-sm transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#FF5A1F] hover:bg-[#E04810] text-white font-heading text-lg font-bold tracking-wider uppercase rounded-xl shadow-xl shadow-[#FF5A1F]/30 hover:shadow-[#FF5A1F]/50 transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>GET MEMBERSHIP DETAILS</span>
                </button>
              </div>

              {/* Trust & Transparency Note */}
              <div className="flex items-center justify-center gap-2 text-center text-xs text-gray-500 pt-1">
                <Shield className="w-3.5 h-3.5 text-gray-400" />
                <span>Opens direct inquiry with Coach Mohsin Tamboli via WhatsApp (+91 88060 60605).</span>
              </div>

            </form>
          )}

        </div>

        {/* Quick Contact Alternatives */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>Prefer a direct phone conversation?</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="text-white hover:text-[#FF5A1F] font-semibold underline flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Call 088060 60605</span>
            </a>
          </div>
          <span className="hidden sm:inline text-gray-600">·</span>
          <div>
            <span>Walk-in visits welcome at Cannought Garden, Sambhajinagar</span>
          </div>
        </div>

      </div>
    </section>
  );
};
