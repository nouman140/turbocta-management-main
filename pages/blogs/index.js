"use client";
import Base from "@layouts/Baseof";
import SingleBlog from "@layouts/components/SingleBlog";
import { markdownify } from "@lib/utils/textConverter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "store/actions/blogsAction";

const BlogPagination = () => {
  const dispatch = useDispatch();
  const { allBlogs, getBlogsLoader } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <Base>
      <section className="section">
        <div className="container">
          {markdownify(
            "Latest Blogs",
            "h3",
            "h3 text-center font-normal text-[56px]"
          )}
          <div className=" flex flex-wrap justify-center">
            {allBlogs &&
             allBlogs?.map((blog) => (
                <div key={blog.id} className="w-full rounded p-4">
                  <SingleBlog blog={blog} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </Base>
  );
};

export default BlogPagination;
