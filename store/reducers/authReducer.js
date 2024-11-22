const initialData = {
    laoder:false,
  };
  const authReducer= (state = initialData, action) => {
    switch (action.type) {
        case "LOADER":
            return {
              ...state,
              loader: action.payload,
            };
      default:
        return state;
    }
  };
  
  export default authReducer;