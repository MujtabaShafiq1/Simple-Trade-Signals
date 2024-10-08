import "sts/styles/globals.css";
import Head from "next/head";
import RootLayout from "sts/components/layout";
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>Simple Trade Signals</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/logo.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet" />
      </Head>

      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </RootLayout>
  );
}
