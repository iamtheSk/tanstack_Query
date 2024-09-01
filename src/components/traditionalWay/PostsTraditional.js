import axios from "axios";

import { useState, useEffect } from "react";
const PostsTraditional = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div key={index} className="post-item">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsTraditional;
