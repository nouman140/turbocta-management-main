const initState = {
  allBlogs: [],
  singleBlog: {},
  getBlogsLoader: false,
};
const blogsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "GET_BLOGS_LOADER":
      return {
        ...state,
        getBlogsLoader: payload,
      };
    case "GET_ALL_BLOGS":
      return {
        ...state,
        allBlogs: payload,
      };
    case "GET_SINGLE_BLOG": {
      return {
        ...state,
        singleBlog: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export default blogsReducer;
