// Analytics event tracking — stub implementation
// TODO: Replace console.log with gtag() calls after adding GA4 script to index.html

export function trackEvent(eventName, params = {}) {
  // TODO: Uncomment after GA4 setup
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', eventName, params);
  // }
  console.log('Track:', eventName, params);
}
