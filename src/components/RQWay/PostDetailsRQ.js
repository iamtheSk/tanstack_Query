import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const fetchPostDetails = async (postId) => {
  const response = await axios.get(`http://localhost:4000/posts/${postId}`);
  return response.data;
};

const PostDetailsRQ = () => {
  const { postId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPostDetails(postId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const { title, body } = data || {};

  return (
    <div className="post-details-container">
      <div className="post-details-title">{title}</div>
      <div className="post-details-body">{body}</div>
    </div>
  );
};

export default PostDetailsRQ;
