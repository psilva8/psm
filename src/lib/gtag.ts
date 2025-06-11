export const GA_TRACKING_ID = 'G-2VNFLK6KFL' // Your actual GA4 Measurement ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: url.toString(),
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, { event_category, event_label, value }: {
  event_category?: string
  event_label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category,
      event_label,
      value,
    })
  }
}

// Track contact form submissions
export const trackContactForm = () => {
  event('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'Contact Form',
  })
}

// Track phone clicks
export const trackPhoneCall = () => {
  event('phone_call_click', {
    event_category: 'engagement',
    event_label: 'Phone Number',
  })
}

// Track email clicks
export const trackEmailClick = () => {
  event('email_click', {
    event_category: 'engagement',
    event_label: 'Email Address',
  })
}

// Track service page views
export const trackServiceView = (serviceName: string) => {
  event('service_page_view', {
    event_category: 'services',
    event_label: serviceName,
  })
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
} 