export const generateCodeVerifier = () => {
  const array = new Uint32Array(28);
  window.crypto.getRandomValues(array);
  return Array.from(array, val => ('0' + val.toString(16)).slice(-4)).join('');
};

sessionStorage.setItem('codeVerifier', generateCodeVerifier());
