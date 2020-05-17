import * as React from 'react';
import App from 'next/app';
import '../css/tailwind.css';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
