export const base64UrlEncode = (text: string): string => {
  let base64 = btoa(text);
  base64 = base64.replace(/=/g, '');
  base64 = base64.replace(/\+/g, '-');
  base64 = base64.replace(/\//g, '_');
  return base64;
};

  
  export const sha256 = async (message: string): Promise<ArrayBuffer> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return hashBuffer;
  };
  
  export const byteArrayToHex = (byteArray: Uint8Array): string => {
    return Array.from(byteArray).map(byte => byte.toString(16).padStart(2, '0')).join('');
  };