/**
 * Burn & Blast Gym (बर्न एंड ब्लास्ट जिम)
 * Vanilla JavaScript interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '918806060605';
  const PHONE_NUMBER = '08806060605';

  // 1. Sticky Navbar scroll effect
  const navbar = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileClose = document.getElementById('mobile-menu-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });
  }
  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  }

  // 3. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          if (mobileDrawer) {
            mobileDrawer.classList.remove('active');
          }
        }
      }
    });
  });

  // 4. Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Enquiry Form Validation & WhatsApp Dispatch
  const enquiryForm = document.getElementById('membership-enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('fullName');
      const phoneInput = document.getElementById('mobileNumber');
      const emailInput = document.getElementById('emailAddress');
      const goalInput = document.querySelector('input[name="fitnessGoal"]:checked');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const goal = goalInput ? goalInput.value : 'Muscle Gain';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || name.length < 2) {
        alert('Please enter your full name (minimum 2 characters).');
        nameInput?.focus();
        return;
      }

      const cleanPhone = phone.replace(/\D/g, '');
      if (!cleanPhone || cleanPhone.length < 10) {
        alert('Please enter a valid 10-digit mobile number.');
        phoneInput?.focus();
        return;
      }

      const textLines = [
        '*New Membership Enquiry - Burn & Blast Gym* 🏋️',
        `• *Name:* ${name}`,
        `• *Phone:* ${phone}`,
        email ? `• *Email:* ${email}` : null,
        `• *Fitness Goal:* ${goal}`,
        message ? `• *Message:* ${message}` : null,
        '\n_Sent via Burn & Blast Gym official website._'
      ].filter(Boolean);

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textLines.join('\n'))}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
