import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-indigo-900"></div>
    </div>
  );
}

export default Loading;
