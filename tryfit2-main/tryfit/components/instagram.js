import { useEffect } from 'react';

const MultipleInstagramPostsEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="instagram-posts-container ">
      {['https://www.instagram.com/p/C4lU_41tMER/', 'https://www.instagram.com/p/C4YBo6ZtEv5/', 'https://www.instagram.com/p/C4dLrhJN2hx/'].map((url, index) => (
        <div key={index} className="instagram-post-item rounded-2xl">
          <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14"></blockquote>
        </div>
      ))}
    </div>
  );
};

export default MultipleInstagramPostsEmbed;