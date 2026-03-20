import "tailwindcss/tailwind.css";
import "@/styles/main.css";
import Script from "next/script";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K8VMCQNNSK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K8VMCQNNSK');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
