import firebase from "../firebase";
export const getBlogs = () => async (dispatch) => {
  dispatch({ type: "GET_BLOGS_LOADER", payload: true });
  try {
    firebase
      .firestore()
      .collection("blogs")
      .onSnapshot(async (data) => {
        let tempData = [];
        for (let doc of data.docs) {
          let id = doc.id;
          let data1 = doc.data();
          tempData.push({ id: id, ...data1 });
        }
        dispatch({ type: "GET_ALL_BLOGS", payload: tempData });
        dispatch({ type: "GET_BLOGS_LOADER", payload: false });
      });
  } catch (error) {
    alert(error.message);
    dispatch({ type: "GET_BLOGS_LOADER", payload: false });
  }
};
export const getSingleBlogs = (id) => async (dispatch) => {
    try {
      const dashboardStatsRef = firebase.firestore().collection("blogs").doc(id);
      const docSnapshot = await dashboardStatsRef.get();
      if (docSnapshot.exists) {
        const blogData = docSnapshot?.data();
        dispatch({
          type: "GET_SINGLE_BLOG",
          payload: { id: id, ...blogData },
        });
      }
    } catch (err) {
      alert(err.message);
    }
  };