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
        <Typography sx={{ my: 2 }}>{/* <h1>ABOUT</h1> */}</Typography>
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
