import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        &nbsp;|&nbsp;
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        &nbsp;|&nbsp;
        <Link href="/about">
          <a>About</a>
        </Link>
        &nbsp;|&nbsp;
        <Link href="/users">
          <a>Users List</a>
        </Link>
        &nbsp;|&nbsp;
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </>
);

export default Layout;
