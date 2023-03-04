import { useState } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Login from '../components/Login';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  return (
    <main className="flex flex-col min-h-screen bg-green-600">
      <Login isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      <SignUp isSignUpOpen={isSignUpOpen} setIsSignUpOpen={setIsSignUpOpen} />
      <Header
        setIsLoginOpen={setIsLoginOpen}
        setIsSignUpOpen={setIsSignUpOpen}
      />
      <NavBar />
      <Hero />
    </main>
  );
}
