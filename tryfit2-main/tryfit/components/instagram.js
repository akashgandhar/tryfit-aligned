import { useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const MultipleInstagramPostsEmbed = () => {
  return (
    <div className="instagram-posts-container ">
      <div className="flex gap-2 flex-row items-center justify-center w-full ">
        {[
          "https://www.instagram.com/p/C4lU_41tMER/",
          "https://www.instagram.com/p/C4YBo6ZtEv5/",
          "https://www.instagram.com/p/C4dLrhJN2hx/",
        ].map((url, index) => (
          <InstagramEmbed key={index}
            url={url}
            className="lg:aspect-auto aspect-[9/16] rounded-lg h-56"
          />
        ))}
      </div>
    </div>
  );
};

export default MultipleInstagramPostsEmbed;
