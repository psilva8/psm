// Google Analytics tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-2VNFLK6KFL';

// Track contact form submissions
export const trackContactForm = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'engagement',
      event_label: 'Contact Form',
    });
  }
};

// Track phone call clicks
export const trackPhoneCall = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call_click', {
      event_category: 'engagement',
      event_label: 'Phone Call',
    });
  }
};

// Track email clicks
export const trackEmailClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'engagement',
      event_label: 'Email Click',
    });
  }
}; 