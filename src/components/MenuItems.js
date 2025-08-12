import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { menuItemsData } from "../../public/assets";

function MenuItems() {
  const router = useRouter();

  return (
    <div className="my-10 mx-3">
      <div className="space-y-2 font-medium text-gray-600">
        {menuItemsData?.map(({ to, label, Icon }) => {
          const isActive = router.pathname === to || (to === "/" && router.pathname === "/feed");
          
          return (
            <Link
              key={to}
              href={to}
              className={`flex w-64 items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                isActive 
                  ? "text-indigo-700 bg-indigo-50 px-3   border-indigo-500" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MenuItems;