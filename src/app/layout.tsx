import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'gustagoat.ai',
  description: 'Descubre los comandos correctos para generar imágenes con I.A.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" translate="no">
      <body>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','1223791793200733');
            fbq('track','PageView');
            fbq('track','ViewContent',{content_name:'Pack 300+ Prompts',content_type:'product',value:3.99,currency:'USD'});`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1223791793200733&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-subids
        />
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`window.pixelId="69fe2a66940a7faaa1ce8298";
            var a=document.createElement("script");
            a.setAttribute("async","");
            a.setAttribute("defer","");
            a.setAttribute("src","https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);`}
        </Script>
        {children}
        <Footer />
      </body>
    </html>
  );
}
