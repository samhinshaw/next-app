import * as React from 'react';
import App, { AppProps } from 'next/app';
import '../css/tailwind.css';
import '../css/global.css';

class MyApp extends App<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
