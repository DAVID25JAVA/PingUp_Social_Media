import { Plus } from "lucide-react";
import React from "react";

function StoriesBar() {
  return (
    <div className="p-4">
      {/* Add Story card */}
      <div className="group cursor-pointer transition-all duration-200 hover:scale-105">
        <div className="border-[3px] border-dashed border-indigo-500 rounded-xl w-40 h-44 mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-200">
          <div className="flex flex-col items-center justify-center h-full space-y-3">
            <div className="bg-indigo-500 rounded-full p-3 group-hover:bg-indigo-600 transition-colors duration-200 shadow-lg">
              <Plus className="text-white w-6 h-6" />
            </div>
            <p className="text-gray-600 text-center font-medium text-sm group-hover:text-gray-700 transition-colors duration-200">
              Create Story
            </p>
          </div>
        </div>
          </div>
          
          {/* Story Card Data */}
          <div>
              
          </div>
    </div>
  );
}

export default StoriesBar;
