// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { MainLayout } from '../../components/MainLayout';

// export default function Task() {
//   const router = useRouter();
//   const [post, setPost] = useState('');

//   useEffect(() => {
//     async function load() {
//       const response = await fetch('https://62e7897793938a545bd3a4cc.mockapi.io/api/v1/tasks');
//       let data = await response.json();
//       setPost(data.filter((post: any) => post.id === router.query.id));
//     }
//     load();
//   }, [router.query.id]);

//   let output: any;
//   if (!post) {
//     output = <h1>Loading</h1>;
//   } else {
//     output = (
//       <>
//         <p>{JSON.stringify(post)}</p>
//       </>
//     );
//   }

//   return (
//     <MainLayout title={`task ${router.query.id}`}>
//       <Link href="/about">back-to-About</Link>
//       <div>{output}</div>
//     </MainLayout>
//   );
// }

// export async function getServerSideProps() {
//   const response = await fetch('https://62e7897793938a545bd3a4cc.mockapi.io/api/v1/tasks');
//   const data = await response.json();

//   return {
//     props: { message: data },
//   };
// }

import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Task(props: any) {
  const router = useRouter();
  const [post, setPost] = useState('');

  useEffect(() => {
    setPost(props.message.filter((post: any) => post.id === router.query.id));
  }, [props.message, router.query.id]);

  let output: any;
  if (!post) {
    output = <h1>Loading</h1>;
  } else {
    output = (
      <>
        <p>{JSON.stringify(post)}</p>
      </>
    );
  }

  return (
    <>
      <MainLayout title={`task ${router.query.id}`}>
        <Box mt={8}>
          <Typography sx={{ my: 2 }}>
            <Link href="/about">back-to-About</Link>
            <div>{`task ${router.query.id}`}</div>
            <div>{output}</div>
          </Typography>
        </Box>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://62e7897793938a545bd3a4cc.mockapi.io/api/v1/tasks');
  const data = await response.json();

  return {
    props: { message: data },
  };
}
