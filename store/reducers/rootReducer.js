import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authUser from "./authUser";
import emailReducer from "./emailReducer";
import blogsReducer from "./blogsReducer";
const rootReducer = combineReducers({
  user: authReducer,
  authUser: authUser,
  mails: emailReducer,
  blogs: blogsReducer,
});
export default rootReducer;
