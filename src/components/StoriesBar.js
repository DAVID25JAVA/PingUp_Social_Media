import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyStoriesData } from "../../public/assets";

function StoriesBar() {
  const [story, setStory] = useState([]);

  const handleStory = async () => {
    setStory(dummyStoriesData);
  };

  useEffect(() => {
    handleStory();
  }, []);

  return (
    <div className="p-4">
      <div className="flex gap-5    ">
        {/* Add Story card */}
        <div className="group cursor-pointer transition-all duration-200 hover:scale-105 flex-shrink-0">
          <div className="border-[3px] border-dashed border-indigo-500 rounded-xl w-40 h-44 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-200">
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

        {/* Story Cards */}
        {story?.map((storyData, index) => (
          <div
            key={index}
            className="w-40 h-44 rounded-xl bg-gradient-to-t bg-purple-500 to-indigo-500 cursor-pointer hover:scale-105 duration-300 transition flex-shrink-0 relative group"
          >
            {storyData?.media_type == "image" ? (
              <img
                src={storyData?.media_url}
                alt={`Story ${index + 1}`}
                className="w-full h-full rounded-xl object-cover"
              />
            ) : (
              <video
                src={storyData?.media_url}
                className="w-full h-full rounded-xl object-cover"
              />
            )}

            {/* Centered Story Content */}
            <p className="absolute inset-0 flex items-center text-white font-semibold text-sm text-center w-full px-2 overflow-hidden drop-shadow-lg">
              <span className="truncate">{storyData?.content}</span>
            </p>

            {/* Optional: Add user avatar and name overlay */}
            {storyData?.user && (
              <div className="absolute top-2 left-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={storyData?.user?.profile_picture?.src}
                    alt={storyData?.user?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoriesBar;
