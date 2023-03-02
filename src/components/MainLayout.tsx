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
            <LinkNavigation href="/">
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

// export function MainLayout({ children, title = 'home' }: any) {
//   return (
//     <>
//       <Head>
//         <title>next | {title}</title>
//       </Head>
//       <nav>
//         <AppBar component="nav">
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               pl: '20px',
//               // height: 5,
//             }}
//           >
//             <LinkNavigation href="/">
//               <Typography textTransform="uppercase" variant="h6" sx={{ my: 2 }}>
//                 Next
//               </Typography>
//             </LinkNavigation>

//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 pr: '20px',
//                 textTransform: 'uppercase',
//               }}
//             >
//               <Box
//                 sx={{
//                   display: 'flex',
//                   pr: '20px',
//                 }}
//               >
//                 <LinkNavigation href="/about">
//                   <ButtonNavigation>
//                     <Typography
//                       textTransform="uppercase"
//                       variant="h6"
//                       // sx={{ my: 1 }}
//                     >
//                       About
//                     </Typography>
//                   </ButtonNavigation>
//                 </LinkNavigation>
//               </Box>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   pr: '20px',
//                 }}
//               ></Box>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   pr: '20px',
//                 }}
//               >
//                 <LinkNavigation href="/task/1">
//                   <ButtonNavigation>
//                     <Typography textTransform="uppercase" variant="h6">
//                       1
//                     </Typography>
//                   </ButtonNavigation>
//                 </LinkNavigation>
//               </Box>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   pr: '20px',
//                 }}
//               >
//                 <LinkNavigation href="/task/2">
//                   <ButtonNavigation>
//                     <Typography textTransform="uppercase" variant="h6">
//                       2
//                     </Typography>
//                   </ButtonNavigation>
//                 </LinkNavigation>
//               </Box>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   pr: '20px',
//                 }}
//               >
//                 <LinkNavigation href="/task/3">
//                   <ButtonNavigation>
//                     <Typography textTransform="uppercase" variant="h6">
//                       3
//                     </Typography>
//                   </ButtonNavigation>
//                 </LinkNavigation>
//               </Box>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   pr: '20px',
//                 }}
//               >
//                 <LinkNavigation href="/task/4">
//                   <ButtonNavigation>
//                     <Typography textTransform="uppercase" variant="h6">
//                       4
//                     </Typography>
//                   </ButtonNavigation>
//                 </LinkNavigation>
//               </Box>
//             </Box>
//           </Box>
//         </AppBar>
//       </nav>
//       <main>{children}</main>
//     </>
//   );
// }
