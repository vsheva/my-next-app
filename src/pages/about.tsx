import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const About = (props:any) => {
  const[ID, setID] = useState("1");
  const[post, setPost] = useState("");

  useEffect(() =>{
    setPost(props.message.filter((post:any)=> post.id===ID))
  }, [props.message, ID])

  return (
    <>
      <div>ABOUT PAGE</div>
      <Link href="/">Back</Link>
      <div>
        <button onClick={()=>setID("1")}>1</button>
      </div>
      <div>
        <button onClick={()=>setID("2")}>2</button>
      </div>
      <div>
        <button onClick={()=>setID("3")}>3</button>
      </div>
      <div>
        <button onClick={()=>setID("4")}>4</button>
      </div>
      <div>
        <button onClick={()=>setID("5")}>5</button>
      </div>
      {ID && <div>{JSON.stringify(post)}</div>}
    </>
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
