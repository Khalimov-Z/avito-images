const initialState = {
    url:null,
    comments:[],
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
                url: action.payload.url,
                comments: action.payload.comments,
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
                comments: [...state.comments ,{
                    text:action.payload,
                    date:new Date()
                }]
            }
        case "modal/delete":
            return initialState;

        default:
            return state;
    }
}
export default imagesIdReducer;