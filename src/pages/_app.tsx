import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Layout from '../Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
