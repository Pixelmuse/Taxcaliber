const KlaroConsentBridge = (() => {
  const consentState = new Map();
  const ensureLayer = () => (window.dataLayer = window.dataLayer || []);

  const push = (event, service, consent, source) => {
    ensureLayer().push({
      event,
      consentService: service,
      consentSource: source,
      consentValue: consent,
      analyticsConsent: service === "gtm-analytics" ? consent : undefined,
      timestamp: new Date().toISOString(),
    });
  };

  return {
    init(service, consent) {
      consentState.set(service, consent);
      push("consent_init", service, consent, "klaro-init");
    },
    update(service, consent, source) {
      if (consentState.get(service) === consent) return;
      consentState.set(service, consent);
      push("consent_update", service, consent, source);
    },
  };
})();

window.__analyticsConsent = window.__analyticsConsent ?? true;

KlaroConsentBridge.init("gtm-analytics", window.__analyticsConsent);

window.klaroConfig = {
  version: 1,
  elementID: "klaro",
  acceptAll: true,
  optOut: true,
  translations: {
    en: {
      consentModal: {
        title: "Services we would like to use",
        description:
          "We use cookies and similar technologies to measure usage and improve the site. You can manage your preferences below.",
      },
      privacyPolicy: {
        text: "Read our privacy policy",
        url: "/privacy",
      },
      gtmAnalytics: {
        analyticsTitle: "Analytics",
        analyticsDesc: "Google Analytics 4 is loaded via Google Tag Manager to understand usage and improve the site.",
      },
    },
  },
  services: [
    {
      name: "gtm-analytics",
      title: "Google Analytics 4 via GTM",
      purposes: ["analytics"],
      cookies: ["_ga", "_gid", "_gat", "_ga_*"],
      required: false,
      optOut: true,
      default: true,
      onlyOnce: true,
      callback(consent, service) {
        const source = consent ? "klaro-accept" : "klaro-decline";
        window.__analyticsConsent = Boolean(consent);
        KlaroConsentBridge.update(service.name, Boolean(consent), source);
      },
    },
  ],
};
