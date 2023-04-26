import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { MainLayout } from '@/components/MainLayout';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

import LinkNavigation from '@/components/LinkNavigation';

import { useRouter } from 'next/router';

//import {Title} from '../components/Title';

import { styled as muiStyled } from '@mui/system';
import styled from '@emotion/styled';

const Title = styled.h1<any>`
  color: red;
`;

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const router = useRouter(); //
  const name = router.query; //
  console.log('name', name);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout title="Home">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '85vw',
            height: '85vh',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100vw',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Title> Hello {name.name}</Title>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography>Get started by editing&nbsp;</Typography>
              <Typography>src/pages/index.tsx</Typography>
            </Box>

            <LinkNavigation
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Typography>By</Typography>
                <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
              </Box>
            </LinkNavigation>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </Box>

          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LinkNavigation
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>
                Docs <span>-&gt;</span>
              </Typography>
              <p>Find in-depth information about Next.js features and&nbsp;API.</p>
            </LinkNavigation>

            <LinkNavigation
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>
                Learn <span>-&gt;</span>
              </Typography>
              <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
            </LinkNavigation>

            <LinkNavigation
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>
                Templates <span>-&gt;</span>
              </Typography>
              <p>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
            </LinkNavigation>

            <LinkNavigation
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>
                Deploy <span>-&gt;</span>
              </Typography>
              <p>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
            </LinkNavigation>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
}
