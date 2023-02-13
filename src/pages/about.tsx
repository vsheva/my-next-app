import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MainLayout } from '../components/MainLayout';

const About = (props: any) => {
  const [ID, setID] = useState('1');
  const [post, setPost] = useState('');

  useEffect(() => {
    setPost(props.message.filter((post: any) => post.id === ID));
  }, [props.message, ID]);

  return (
    <MainLayout title="about">
      <Box
        sx={{
          display: 'flex',
          pr: '20px',
        }}
      >
        <Typography textTransform="uppercase" variant="h6" sx={{ my: 2 }}>
          <h1>ABOUT</h1>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pr: '20px',
          }}
        >
          <Box sx={{ display: 'flex', pr: '20px' }}>
            <Typography textTransform="uppercase" variant="h6" sx={{ my: 2 }}>
              <Link href="/">Back</Link>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', pr: 2 }}>
            <Typography textTransform="uppercase" variant="h6" sx={{ my: 2 }}>
              <div>
                <Link href="/task/1" onClick={() => setID('1')}>
                  1
                </Link>
              </div>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', pr: 2 }}>
            <Typography textTransform="uppercase" variant="h6" sx={{ my: 2 }}>
              <div>
                <Link href="/task/2" onClick={() => setID('2')}>
                  2
                </Link>
              </div>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', pr: 2 }}>
            <Typography textTransform="uppercase" variant="h6" sx={{ my: 2 }}>
              <Link href="/task/3" onClick={() => setID('3')}>
                3
              </Link>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', pr: 1 }}>
            <Typography textTransform="uppercase" variant="h6" sx={{ my: 2 }}>
              <Link href="/task/4" onClick={() => setID('4')}>
                4
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default About;

export async function getServerSideProps() {
  const response = await fetch('https://62e7897793938a545bd3a4cc.mockapi.io/api/v1/tasks');
  const data = await response.json();

  return {
    props: { message: data },
  };
}

/*
 await fetch('https://62e7897793938a545bd3a4cc.mockapi.io/api/v1/tasks')
    .then(res => res.json())
    .then(data => tasks.push(JSON.stringify(data)));
*/
