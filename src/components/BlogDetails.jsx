import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`} className="font-bold text-lg">
        <span>{post.title}</span>
      </NavLink>
      <p className="text-sm">
        By <span className=" italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className=" underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-xs">Posted On {post.date}</p>
      <p className="text-base mt-3">{post.content}</p>
      <div className="">
        {post.tags.map((tag, index) => (
          <NavLink
            className="underline text-blue-500  font-bold  px-1 text-sm"
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
          >
            <span>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;

// <div key={post.id}>
//       <p className="font-bold text-lg">{post.title}</p>
//       <p className="text-sm">
//         by <span className=" italic">{post.author}</span> on{" "}
//         <span className=" underline font-bold">{post.category}</span>
//       </p>
//       <p className="text-xs">Posted On {post.date}</p>
//       <p className="text-base mt-3">{post.content}</p>
//       <div className="">
//         {post.tags.map((tag, index) => {
//           return (
//             <span
//               className="underline text-blue-500  font-bold  px-1 text-sm"
//               key={index}
//             >{`#${tag}`}</span>
//           );
//         })}
//       </div>
//     </div>
