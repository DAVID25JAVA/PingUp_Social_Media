import React from "react";
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar"; // You'll need to create this component
import Loading from "./Loading";

function Layout({ children }) {
  const { isSignedIn, user, isLoaded } = useUser();

  // console.log("user login---->", user);

  if (!isLoaded) {
    return <Loading />;
  }

  // If user is signed in, show sidebar layout
  if (isSignedIn) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    );
  }

  // If user is not signed in, show default layout (for login page)
  return (
    <div className="flex flex-col min-h-screen px-4">
      <main className="">{children}</main>
    </div>
  );
}

export default Layout;
