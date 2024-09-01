import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const PostsRQ = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    //Minimum Take 2 parameters inside
    queryKey: ["posts"], //unique identifier for the query
    queryFn: () => {
      // Callback always returns a promise
      return axios.get("http://localhost:4000/posts");
    },
    enabled: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="post-list">
      <button onClick={refetch}>Fetch Posts</button>
      {data?.data.map((post, index) => (
        <Link key={index} to={`/rq-posts/${post.id}`}>
          <div key={index} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsRQ;
