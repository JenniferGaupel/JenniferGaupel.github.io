import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from 'next/app'

config.autoAddCss = false; 

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
