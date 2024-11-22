import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";
export const userLogin = (email, password, onSuccess) => async (dispatch) => {
  dispatch(Loader(true));
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        firebase
          .firestore()
          .collection("users")
          .doc(data.user.uid)
          .onSnapshot((doc) => {
            var tempUser = {};
            tempUser = { uid: doc.id, ...doc.data() };
            onSuccess();
            dispatch(Loader(false));
            dispatch({ type: "LOGIN", payload: tempUser });
          });
      });
  } catch (error) {
    console.log(error.message);
    dispatch(Loader(false));
  }
};
export const userSignUp = (detail, password, onSuccess) => async (dispatch) => {
  dispatch(Loader(true));
  firebase
    .auth()
    .createUserWithEmailAndPassword(detail.email, password)
    .then(async (data) => {
      console.log(data, "data");
      let fileName1 = detail.image.name;
      let fileName2 = fileName1.slice(fileName1.lastIndexOf("."));
      let fileName3 = uuidv4() + fileName2.toLowerCase();
      let storageRef = await firebase
        .storage()
        .ref("profilePicture/" + fileName3)
        .put(detail.image);
      let url = await storageRef.ref.getDownloadURL();
      firebase
        .firestore()
        .collection("users")
        .doc(data.user.uid)
        .set({
          ...detail,
          image: url,
          role: "customer",
          createdAt: firebase.firestore.Timestamp.now(),
        })
        .then((res) => {
          dispatch(Loader(false));
          alert("Account Created Successfully");
          dispatch({
            type: "LOGIN",
            payload: { uid: data.user.uid, ...detail, image: url },
          });
          onSuccess();
        })
        .catch((err) => {
          console.log(err, "err");
          dispatch(Loader(false));
        });
    })
    .catch((err) => {
      //   Toast.error(err.message);
      dispatch(Loader(false));
    });
};
export const getUser = (id) => async (dispatch) => {
  try {
    const dashboardStatsRef = firebase.firestore().collection("users").doc(id);
    const docSnapshot = await dashboardStatsRef.get();
    if (docSnapshot.exists) {
      var tempUser = {};
      tempUser = { uid: id, ...docSnapshot?.data() };
      dispatch({
        type: "LOGIN",
        payload: tempUser,
      });
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};
export const doLogOut = () => async (dispatch) => {
  try {
    localStorage.clear();
    firebase
      .auth()
      .signOut()
      .then((data) => {
        dispatch({ type: "LOGOUT", uid: "" });
      })
      .catch((err) => {
        alert(err.message);
      });
  } catch (error) {
    alert(error.message);
  }
};
const Loader = (data) => async (dispatch) => {
  dispatch({
    type: "LOADER",
    payload: data,
  });
};
