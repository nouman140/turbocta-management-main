import { RepositoryFactory } from "../../repository/RepositoryFactory";
var sendEmail = RepositoryFactory.get("mail");
export const sendContactEmail = (detail, onSuccess) => async (dispatch) => {
    dispatch(getLoader(true));
    try {
        const { data } = await sendEmail.sendEmailRepo(detail);
        if (data.success) {
            dispatch(getLoader(false));
            setTimeout(() => {
                alert(data.message);
                onSuccess();
            }, 0);
        } else {
            console.log(data.message);
            dispatch(getLoader(false));
        }
    } catch (error) {
        console.log(error.message);
        dispatch(getLoader(false));
    }
};
export const instructionEmail = (detail, onSuccess) => async (dispatch) => {
    dispatch(getLoader(true));
    try {
        const { data } = await sendEmail.instructionEmailRepo(detail);
        if (data.success) {
            dispatch(getLoader(false));
            setTimeout(() => {
                alert(data.message);
                onSuccess();
            }, 0);
        } else {
            console.log(data.message);
            dispatch(getLoader(false));
        }
    } catch (error) {
        console.log(error.message);
        dispatch(getLoader(false));
    }
};
export const subscribeEmail = (detail, onSuccess) => async (dispatch) => {
    dispatch(getLoader(true));
    try {
        const { data } = await sendEmail.subscribeEmailRepo(detail);
        if (data.success) {
            dispatch(getLoader(false));
            setTimeout(() => {
                alert(data.message);
                onSuccess();
            }, 0);
        } else {
            console.log(data.message);
            dispatch(getLoader(false));
        }
    } catch (error) {
        console.log(error.message);
        dispatch(getLoader(false));
    }
};
const getLoader = (data) => async (dispatch) => {
    dispatch({
        type: "LOADER",
        payload: data,
    });
};
