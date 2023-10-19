import React, { useEffect, useState } from 'react';

function GoogleAdsTag() {
  
  useEffect(() => {
    // Insertar el código de Google Tag Manager en el DOM
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-10981293938';
    document.head.appendChild(script);

    // Inicializar Google Tag Manager
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-10981293938');
    }

    // Limpiar el script cuando se desmonta el componente
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
export default GoogleAdsTag;