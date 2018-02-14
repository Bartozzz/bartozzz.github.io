export default function isTablet() {
  return /Tablet|iPad/i.test(navigator.userAgent || navigator.vendor || window.opera);
};
