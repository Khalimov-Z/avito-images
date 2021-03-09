const initialState = {
    items:[],
    loading : false
}
const imagesIdReducer = (state = initialState,action) => {
    switch (action.type){
        case "imagesId/load/start":
            return {
                ...state,
                loading: true
            }
        case "imagesId/load/success":
            return {
                ...state,
                items: action.payload,
                loading: false
            }


        default:
            return state;
    }
}
export default imagesIdReducer;