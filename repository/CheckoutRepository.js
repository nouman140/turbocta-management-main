import Repository from "./Repository";
const PAYMENT ="/create-subscription";
export default {
    checkutRepo(detail) {
      return Repository.post(`${PAYMENT}`,detail);
    }, 
  };