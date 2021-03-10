const initialState = {
    items:[],
    comment:[],
    addComments:[],
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
        case "comments/create":
            return {
                ...state,
                comment: action.payload
            }
        case "comments/add":
            return {
                ...state,
                addComments: action.payload
            }



        default:
            return state;
    }
}
export default imagesIdReducer;