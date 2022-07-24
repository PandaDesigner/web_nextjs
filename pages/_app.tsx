import { NextPage } from 'next';
import { type } from 'os';
import { ReactElement } from 'react';
import { AppProps } from '../node_modules/next/app';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement ) => JSX.Element;
}

type AppPropsWithsLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithsLayout) {
  const getLayout = Component.getLayout || (( page )=> page);
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
