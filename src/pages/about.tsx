import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const About = (props: any) => {
  const [ID, setId] = useState('1');
  const [post, setPost] = useState([]);

  //console.log("message", props.message)

  // строку в массив с помощью parse
  //в 33 строчке - массив в строку
  useEffect(() => {
    setPost(JSON.parse(props.message).filter((post: any) => post.id === ID));
  }, [props.message, ID]);

  return (
    <>
      <h1>About</h1>
      <Link href="/">{`Hello:`}</Link>
      <div>
        <button onClick={() => setId('1')}>1</button>
      </div>
      <div>
        <button onClick={() => setId('2')}>2</button>
      </div>
      <div>
        <button onClick={() => setId('3')}>3</button>
      </div>
      <div>
        <button onClick={() => setId('4')}>4</button>
      </div>
      {ID !== '' && <div>{JSON.stringify(post)}</div>}
    </>
  );
};

export default About;

//SSR

export async function getServerSideProps() {
  let response = await fetch('https://62e7897793938a545bd3a4cc.mockapi.io/api/v1/tasks');

  let data = await response.json(); //array

  //делаем из массива строку
  return {
    props: { message: JSON.stringify(data) },
  };
}

const name = '1';

/*
 await fetch('https://62e7897793938a545bd3a4cc.mockapi.io/api/v1/tasks')
    .then(res => res.json())
    .then(data => tasks.push(JSON.stringify(data)));
*/
