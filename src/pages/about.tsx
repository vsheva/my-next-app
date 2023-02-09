import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = (props: any) => {
  const [ID, setID] = useState('1');
  const [post, setPost] = useState('');

  useEffect(() => {
    setPost(props.message.filter((post: any) => post.id === ID));
  }, [props.message, ID]);

  return (
    <MainLayout title="about">
      <AppBar component="nav">
        <Box sx={{ display: 'flex' }}>
          <Typography>Next</Typography>
          <h1>ABOUT PAGE</h1>
          <Link href="/">Back</Link>
          <div>
            <Link href="/task/1" onClick={() => setID('1')}>
              1
            </Link>
          </div>
          <div>
            <Link href="/task/2" onClick={() => setID('2')}>
              2
            </Link>
          </div>
          <div>
            <Link href="/task/3" onClick={() => setID('3')}>
              3
            </Link>
          </div>
          <div>
            <Link href="/task/4" onClick={() => setID('4')}>
              4
            </Link>
          </div>
        </Box>
      </AppBar>
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
