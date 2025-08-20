import Loading from "@/components/Loading";
import StoriesBar from "@/components/StoriesBar";
import React, { useEffect, useState } from "react";
import { dummyPostsData } from "../../public/assets";

function feed() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFeed = async () => {
    setFeed(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    handleFeed();
  }, []);

  return !loading ? (
    <div className="pt-12 md:pt-1">
      {/* Story card and story Data */}
      <div className="flex   px-16">
        <div>
          <div>
            <StoriesBar />
          </div>
          {/* Feed Data */}
          <div></div>
        </div>

        {/* right side sponsard and recent messages UI */}
        <div>
          <h1 className="text-black">sponsard</h1>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default feed;
