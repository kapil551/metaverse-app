import Head from 'next/head'
import Login from '../components/Login';

import { useMoralis } from 'react-moralis';

export default function Home() {

  // https://docs.moralis.io/moralis-server/tools/react-moralis
  const { isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) {
    return (
      <Login />
    )
  }
  
  return (

    <div className="h-screen">
      
      <Head>
        <title>welcome to the metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Welcome to the METAVERSE </h1>

      <button onClick={logout} className="bg-yellow-500 rounded-lg p-2 font-bold animate-pulse"> Logout </button>

    </div>
  )
}
