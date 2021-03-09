const initialState = {
    items:[],
    loading : false
}
const commentsReducer = (state = initialState,action) => {
    switch (action.type){
        case "comments/create/start":
            return {
                ...state,
                loading: true
            }
        case "comments/create/success":
            return {
                ...state,
                items: action.payload,
                loading: false
            }


        default:
            return state;
    }
}
export default commentsReducer;