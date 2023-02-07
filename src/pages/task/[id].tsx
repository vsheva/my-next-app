import {useRouter} from "next/router";
import Link from "next/link";
import React, {useEffect, useState} from "react";

export default function Task (props:any) {
  const router = useRouter()


    const post = props.message.filter((post:any)=>post.id===router.query.id)

    return ( <>
            {/*<h1>{`${router.query.id}`}</h1>*/}
             <Link href="/about">back-to-About</Link>
            <div>{JSON.stringify(post)}</div>
             </>
    );
};


export async function getServerSideProps() {
    const response = await fetch('https://62e7897793938a545bd3a4cc.mockapi.io/api/v1/tasks');
    const data = await response.json();

    return {
        props: { message: data },
    };
}
