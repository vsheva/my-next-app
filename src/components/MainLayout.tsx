import Head from 'next/head';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export function MainLayout({ children, title = 'home' }: any) {
  return (
    <>
      <Head>
        <title>next | {title}</title>
      </Head>
      <nav>
        <AppBar component="nav">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              pl: '20px',
              // height: 5,
            }}
          >
            <Typography textTransform="uppercase" variant="h6" sx={{ my: 2 }}>
              Next
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: '20px',
                textTransform: 'uppercase',
              }}
            >
              <Button sx={{ color: '#fff' }}>Hi</Button>

              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Link href="/about">
                  <Button sx={{ color: '#fff' }}>
                    {' '}
                    <Typography
                      textTransform="uppercase"
                      variant="h6"
                      // sx={{ my: 1 }}
                    >
                      About
                    </Typography>
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Link href="/">
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform="uppercase" variant="h6">
                      Home
                    </Typography>
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Link href="/task/1">
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform="uppercase" variant="h6">
                      1
                    </Typography>
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Link href="/task/2">
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform="uppercase" variant="h6">
                      2
                    </Typography>
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Link href="/task/3">
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform="uppercase" variant="h6">
                      3
                    </Typography>
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Link href="/task/4">
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform="uppercase" variant="h6">
                      4
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </nav>
      <main>{children}</main>
    </>
  );
}
