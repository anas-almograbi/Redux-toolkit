import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./Redux/Store/store"; // Import AppDispatch type
import { psotapi } from "./Redux/Post/postApi";
import { PostUrl } from "./Redux/Type/Url";

export const Postdata = () => {
  const data = useSelector((state: RootState) => state.Post.post);
  const dispatch: AppDispatch = useDispatch(); // Use AppDispatch type
  const isLoading = useSelector((state: RootState) => state.Post.loading);
  const error = useSelector((state: RootState) => state.Post.error);

  useEffect(() => {
    // Dispatch the thunk with the correct URL
    dispatch(psotapi(PostUrl));
  }, [dispatch]);

  return (
    <div>
      {error && <h1>{error}</h1>} {/* Display the error message */}
      {isLoading ? (
        <h1>Loading...</h1> // Show loading state
      ) : data.length > 0 ? ( // Check if data length is greater than 0
        data.map((post) => <h6 key={post.id}>{post.title}</h6>) // Add a key for each mapped item
      ) : (
        <h6>No posts available</h6> // Message if no posts are available
      )}
    </div>
  );
};
