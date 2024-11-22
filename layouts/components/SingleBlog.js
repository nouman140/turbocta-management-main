import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }) => {
  const formattedDate = (createdAt) => {
    const { seconds, nanoseconds } = createdAt;
    const milliseconds = seconds * 1000 + nanoseconds / 1000000; // Convert to milliseconds
    return dayjs(milliseconds).format("DD-MM-YYYY");
  };
  return (
    <>
      <div
        className="group relative overflow-hidden rounded-sm bg-white shadow-md hover:shadow-lg md:flex md:items-center md:justify-between md:space-x-4 md:space-y-0"
        data-wow-delay=".1s"
      >
        <Link
          href={`blogs/detail/${blog?.id}`}
          className="relative block aspect-[37/22] w-full md:order-1 md:w-6/12 md:flex-shrink-0"
        >
          <Image
            src={
              blog?.file ||
              "https://media.istockphoto.com/id/992975258/photo/electrical-maintenance-electrician-change-light-bulb-in-house-exterior-wall-lamp.jpg?s=2048x2048&w=is&k=20&c=WHGq4CRYV3TCM2J4twNNpLVSTiF6QEhfdPKGKyneYq0="
            }
            alt="image"
            fill
            className="md:order-2"
          />
        </Link>
        <div>
          <div className="px-6 pt-4 text-xs font-medium text-gray-500">
            <p>Posted on: {formattedDate(blog?.createdAt)} </p>
          </div>

          <div className="px-6 pt-4  ">
            <h3>
              <Link
                href={`blogs/detail/${blog?.id}`}
                className="mb-4 block overflow-hidden text-ellipsis text-xl font-bold text-gray-700 hover:text-primary sm:text-2xl dark:text-white dark:hover:text-primary"
              >
                {blog?.title.length > 65
                  ? `${blog?.title.substring(0, 65)}...`
                  : blog?.title}
              </Link>
            </h3>
          </div>

          <div className="border-t  px-6 pb-4 pt-2">
            <p className="mb-2 text-sm font-medium text-gray-500">
              Subcategory:
            </p>

            <div className="flex flex-wrap gap-2">
              <div>
                <p className="rounded-md bg-primary px-2 py-1 text-xs font-light text-white opacity-90">
                  {blog?.subCategory}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
