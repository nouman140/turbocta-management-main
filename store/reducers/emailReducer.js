const initialData = {
    loading:false,
 };
 
 const emailReducer = (state = initialData, action) => {
     switch (action.type) {
         case "LOADER":
             return {
                 ...state,
                 loading: action.payload,
             };
         default:
             return state;
     }
 };
 
 export default emailReducer;
 