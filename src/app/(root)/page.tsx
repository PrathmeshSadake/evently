import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className='text-4xl'>Evently</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default Home;
