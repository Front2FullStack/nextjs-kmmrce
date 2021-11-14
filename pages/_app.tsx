/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import '../styles/globals.css'
import  {AppProps} from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import theme from '@styles/theme';
import Layout from '@components/Layout'
import createEmotionCache from '../createEmotionCache';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}
const MyApp: FC<MyAppProps> = (props: MyAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
      <CacheProvider value={emotionCache}>
          <Head>
            <title>My App</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
           <Layout>
            <Component {...pageProps} />
          </Layout>
          </ThemeProvider>
      </CacheProvider>
  );
};
export default MyApp
