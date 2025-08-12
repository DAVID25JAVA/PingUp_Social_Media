import React, { useState } from "react";
import Image from "next/image";
import { assets, dummyUserData } from "../../public/assets";
import MenuItems from "./MenuItems";
import { useRouter } from "next/router";
import { LogOutIcon, PlusCircle, X, AlertTriangle } from "lucide-react";
import { useClerk, UserButton } from "@clerk/nextjs";

function Sidebar() {
  const router = useRouter();
  const { signOut } = useClerk();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleConfirmLogout = async () => {
    try {
      setIsLoggingOut(true);
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
      setIsLoggingOut(false);
    }
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <>
      <div className="w-72 min-h-screen border-r border-indigo-100">
        {/* Logo */}
        <div onClick={() => router.push("/feed")} className="py-2 px-5">
          <Image
            src={assets?.logo}
            alt="logo"
            className="cursor-pointer w-24"
          />
        </div>
        <hr className="w-full" />

        {/* Menu items*********** */}
        <div>
          <MenuItems />
        </div>

        {/* Create post button */}
        <div className="mx-4 w-64 h-11 cursor-pointer rounded-lg border bg-gradient-to-r from-indigo-600 to-purple-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 flex items-center justify-center gap-3">
          <PlusCircle />
          <button className="text-white cursor-pointer">Create profile</button>
        </div>

        {/* Logout button with user account management */}
        <hr className="w-72 absolute bottom-16"></hr>
        <div className="absolute bottom-1 flex justify-between px-5 items-center">
          {/* <Image
            src={dummyUserData?.profile_picture}
            className="w-12 h-12 rounded-full"
            alt="Profile"
          /> */}
          <UserButton className="" />
          <div className="px-2">
            <p className="text-black font-semibold text-[19px]">
              {dummyUserData?.full_name}
            </p>
            <p className="text-gray-500 text-[15px]">
              @ {dummyUserData?.username}
            </p>
          </div>
          <div
            className="absolute -right-11 cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors"
            onClick={handleLogoutClick}
          >
            <LogOutIcon className="text-gray-500 hover:text-gray-700" />
          </div>
        </div>
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-96 mx-4 transform transition-all duration-200 scale-100">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Confirm Logout
                </h3>
              </div>
              <button
                onClick={handleCancelLogout}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                disabled={isLoggingOut}
              >
                <X size={20} className="cursor-pointer" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Are you sure you want to logout? You'll need to sign in again to
                access your account.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={handleCancelLogout}
                  disabled={isLoggingOut}
                  className="px-6 py-2.5 cursor-pointer text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmLogout}
                  disabled={isLoggingOut}
                  className="px-6 py-2.5 cursor-pointer bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoggingOut ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Logging out...
                    </>
                  ) : (
                    <>
                      <LogOutIcon size={16} className="" />
                      Yes, Logout
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
