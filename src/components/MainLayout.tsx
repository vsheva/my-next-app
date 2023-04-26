import Head from 'next/head';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import styled from '@emotion/styled';
import LinkNavigation from './LinkNavigation';
import ButtonNavigation from './ButtonNavigation';

const Box1 = styled(Box)`
  display: flex;
`;

const Boxic = styled(Box1)`
  padding-right: 20px;
`;

const LargeBoxic = styled(Box1)`
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

const BigBoxic = styled(Box1)`
  justify-content: space-between;
  padding-left: 20px;
`;

const Tapo = styled(Typography)`
  text-transform: uppercase;
`;

const HeadTapo = styled(Tapo)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export function MainLayout({ children, title = 'home' }: any) {
  const name = 'Vally';

  const nameButton = [
    { href: '/about', title: 'About' },
    { href: '/task/1', title: '1' },
    { href: '/task/2', title: '2' },
    { href: '/task/3', title: '3' },
    { href: '/task/4', title: '4' },
  ];

  const OutputNavigation = nameButton.map(button => (
    <Boxic key={button.title}>
      <LinkNavigation href={button.href}>
        <ButtonNavigation>
          <Tapo>{button.title}</Tapo>
        </ButtonNavigation>
      </LinkNavigation>
    </Boxic>
  ));

  return (
    <>
      <Head>
        <title>next | {title}</title>
      </Head>
      <nav>
        <AppBar component="nav">
          <BigBoxic>
            <LinkNavigation href={{ pathname: '/', query: { name: 'Vally' } }}>
              <HeadTapo variant="h5">Next</HeadTapo>
            </LinkNavigation>

            <LargeBoxic>{OutputNavigation}</LargeBoxic>
          </BigBoxic>
        </AppBar>
      </nav>
      <main>{children}</main>
    </>
  );
}
