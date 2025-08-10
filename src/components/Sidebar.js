import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { assets } from "../../public/assets";
import MenuItems from "./MenuItems";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-64 min-h-screen   border-r border-indigo-100">
      {/* Logo */}
      <div onClick={() => router.push("/feed")} className="py-2 px-5">
        <Image src={assets?.logo} alt="logo" className="cursor-pointer w-24" />
      </div>
      <hr className="w-full" />

      {/* Menu items*********** */}
      <div>
        <MenuItems />
      </div>
    </div>
  );
}

export default Sidebar;
