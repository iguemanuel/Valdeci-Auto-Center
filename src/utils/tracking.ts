declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const GOOGLE_ADS_SEND_TO = 'AW-18076904042/4JdYCPqYmpwcEOrU3qtD'

export function trackContactClick() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_SEND_TO,
      value: 1.0,
      currency: 'BRL',
    })
  }

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead')
  }
}

export {}
