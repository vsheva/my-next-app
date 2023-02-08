import Head from 'next/head';

export function MainLayout({ children, title = 'home' }) {
  return (
    <>
      <Head>
        <title>next | {title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
