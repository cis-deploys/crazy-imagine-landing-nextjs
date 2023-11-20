import React, { useEffect, useState } from 'react';

function GoogleAdsTag() {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-10981293938';
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-10981293938');
    }

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
export default GoogleAdsTag;