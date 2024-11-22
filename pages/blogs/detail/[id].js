"use client";
import Base from "@layouts/Baseof";
import RoundedContainer from "@layouts/components/RoundedContainer";
import SingleBlog from "@layouts/components/SingleBlog";
import { markdownify } from "@lib/utils/textConverter";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getSingleBlogs } from "store/actions/blogsAction";
import ReactHtmlParser from "react-html-parser";
import arrow from "../../../public/images/leftArrow.png";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
const BlogPagination = () => {
  let param = useSearchParams();
  let id = param.get("id");
  const dispatch = useDispatch();
  const { singleBlog } = useSelector((state) => state.blogs);
  const [htmlContent, setHtmlContent] = useState();
  const formattedDate = (createdAt) => {
    const { seconds, nanoseconds } = createdAt;
    const milliseconds = seconds * 1000 + nanoseconds / 1000000; // Convert to milliseconds
    return dayjs(milliseconds).format("DD-MM-YYYY");
  };
  useEffect(() => {
    if (singleBlog?.description) {
      setHtmlContent(singleBlog?.description);
    }
  }, [singleBlog]);
  useEffect(() => {
    dispatch(getSingleBlogs(id));
  }, [id]);
  return (
    <Base>
      <RoundedContainer>
        <div className="mb-5 flex w-full border-b py-5">
          <Link href="/blogs">
            <Image
              alt="demo"
              src={arrow}
              className="h-7 w-12"
            />
          </Link>

          <div className="px-4 md:px-32">
            <h3 className="w-full min-w-max text-xl font-semibold md:text-2xl">
              {singleBlog?.title}
            </h3>
          </div>

          <div className="mt-3 flex w-full  justify-end">
            <p className="text-sm font-semibold  text-gray-500">
              {/* Posted on: {formattedDate(singleBlog?.createdAt)} */}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4 md:px-40 ">
          <div>{ReactHtmlParser(htmlContent)}</div>
        </div>
      </RoundedContainer>
    </Base>
  );
};

export default BlogPagination;
