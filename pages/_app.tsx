/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import '../styles/globals.css'
import  {AppProps} from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import theme from '@styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
export default MyApp
