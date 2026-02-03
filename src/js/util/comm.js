export function getQueryParam() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}