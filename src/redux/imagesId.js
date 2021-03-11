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
        case "modal/delete":
            return {
                ...state,
                items:`${state.items.id === action.payload ?false:true``}`,
                addComments: "",
                comment: ""

            }



        default:
            return state;
    }
}
export default imagesIdReducer;