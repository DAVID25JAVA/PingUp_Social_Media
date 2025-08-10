import login from "@/components/login";

export default function Home() {
  return (
    <>
     <login></login>
    </>
    // <div className="md:max-w-6xl w-full mx-auto xl:px-20">
    //   <div className="2xl:container 2xl:mx-auto">
    //     <div className="h-screen w-full ">
    //       <Image
    //         src={assets?.bgImage}
    //         alt="bg-image"
    //         fill
    //         className="object-cover -z-1"
    //         priority
    //       />

    //       {/* Logo************** */}
    //       <div className="py-5 md:py-5">
    //         <Image src={assets?.logo} alt="logo" className="cursor-pointer" />
    //       </div>

    //       {/* <div className="bg-black">
    //          <SignOutButton routing="hash"/>
    //       </div> */}

    //       {/* left content */}
    //       <div className="flex flex-col md:flex-row gap-6 md:justify-center md:items-center md:gap-14">
    //         <div>
    //           <div className="flex gap-3 items-center md:mt-10 mt-5">
    //             <Image src={assets?.group_users} alt="image" width={100} />
    //             <div className="flex flex-col">
    //               <div className="flex ">
    //                 {Array(5)
    //                   .fill(0)
    //                   .map((_, i) => (
    //                     <Star
    //                       key={i}
    //                       className="text-transparent fill-amber-500 size-4 md:size-4.5"
    //                     />
    //                   ))}
    //               </div>
    //               <p className="text-indigo-900 tracking-tight font-bold text-sm md:text-base ">
    //                 Used by 12k+ developers
    //               </p>
    //             </div>
    //           </div>

    //           <div className=" my-3 md:max-w-xl w-full ">
    //             <h1 className="text-2xl md:text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-indigo-950 to-indigo-800">
    //               More than just friends truly connect
    //             </h1>
    //             <p className=" text-base leading-6 md:leading-7 mt-1 md:mt-2 md:max-w-md max-w-80 md:text-2xl text-indigo-900">
    //               Connect with global community on pingup.
    //             </p>
    //           </div>
    //         </div>

    //         {/* right login form */}
    //         <div className="mb-5">
    //           <SignIn routing="hash" className="" />
              
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
