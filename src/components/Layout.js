import React from "react";
import { useUser } from "@clerk/nextjs";

function Layout({ children }) {

  const { user } = useUser();
  console.log("user login---->", user);
  

  return (
    <div className=" flex flex-col min-h-screen px-4">
      <main className="">{children}</main>
    </div>
  );
}

export default Layout;
