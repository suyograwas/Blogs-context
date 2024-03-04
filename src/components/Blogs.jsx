import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import Spinner from "./Spinner";
import BlogDetails from "../components/BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className=" w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-16 justify-center items-center min-h-screen mb-[60px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Data Found </p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
