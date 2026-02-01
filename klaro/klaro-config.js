const KlaroConsentBridge = (() => {
  const consentState = new Map();
  const SERVICE_KEYS = {
    'gtm-analytics': 'analyticsConsent',
  };
  const EVENT_NAME = 'analytics-consent-change';

  const ensureLayer = () => {
    window.dataLayer = window.dataLayer || [];
    return window.dataLayer;
  };

  const dispatchAnalyticsEvent = (serviceName, consent, source) => {
    if (serviceName !== 'gtm-analytics') return;
    window.__analyticsConsent = consent;
    const detail = { consent, source };
    const dispatcher = typeof window.CustomEvent === 'function'
      ? () => window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail }))
      : () => {
          const evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(EVENT_NAME, false, false, detail);
          window.dispatchEvent(evt);
        };
    dispatcher();
  };

  const pushState = (serviceName, consent, source) => {
    const payload = {
      event: 'consent_update',
      consentService: serviceName,
      consentValue: consent,
      consentSource: source,
    };
    const mappedKey = SERVICE_KEYS[serviceName] || `${serviceName}Consent`;
    payload[mappedKey] = consent;
    ensureLayer().push(payload);
  };

  return {
    update(serviceName, consent, source = 'klaro') {
      if (typeof consent !== 'boolean') return;
      if (consentState.get(serviceName) === consent) return;
      consentState.set(serviceName, consent);
      pushState(serviceName, consent, source);
      dispatchAnalyticsEvent(serviceName, consent, source);
    },
  };
})();

window.__analyticsConsent = window.__analyticsConsent ?? false;

window.klaroConfig = {
  version: 1,
  elementID: 'klaro',
  acceptAll: true,
  app: {
    name: 'WebIQ',
  },
  translations: {
    en: {
      consentModal: {
        title: 'Services we would like to use',
        description:
          'We use cookies and similar technologies to measure usage, improve GTM Inspector, and keep the app running. You can manage your preferences below.',
      },
      privacyPolicy: {
        text: 'Read our privacy policy',
        url: '/privacy',
      },
      gtmInspector: {
        analyticsTitle: 'Analytics',
        analyticsDesc: 'Google Analytics 4 is loaded via Google Tag Manager to understand usage and improve GTM Inspector.',
      },
    },
  },
  services: [
    {
      name: 'gtm-analytics',
      title: 'Google Analytics 4 via GTM',
      purposes: ['analytics'],
      cookies: ['_ga', '_gid', '_gat', '_ga_*'],
      required: false,
      optOut: false,
      onlyOnce: true,
      callback(consent, service) {
        const source = consent ? 'klaro-accept' : 'klaro-decline';
        KlaroConsentBridge.update(service.name, consent, source);
      },
    },
  ],
};
