declare global {
  interface Window {
    fbq?: (action: 'track' | 'trackCustom' | 'init', event: string, data?: Record<string, unknown>) => void;
  }
}

export function trackEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', event, data);
}

export function trackCustom(event: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('trackCustom', event, data);
}
