export function getQueryParam() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}

export function sendToReacNativeApp( sendData ) {
  if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
    window.ReactNativeWebView.postMessage( JSON.stringify( sendData ) );
  }
}