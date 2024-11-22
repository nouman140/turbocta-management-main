import { RepositoryFactory } from "../../repository/RepositoryFactory";
var checkoutRep = RepositoryFactory.get("checkout");
export const checkout = (detail, onSuccess) => async (dispatch) => {
  try {
    const { data } = await checkoutRep.checkutRepo(detail);
    if (data.success) {
      setTimeout(() => {
        alert(data.message);
        onSuccess();
      }, 0);
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};
