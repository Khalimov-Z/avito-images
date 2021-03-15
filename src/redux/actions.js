export const loadImages =() => {
    return (dispatch) => {
        dispatch({type:"images/load/start"})
        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type:"images/load/success",
                    payload: json
                })
            })
    }
}
export const loadImagesId =(id) => {
    return (dispatch) => {
        dispatch({type:"imagesId/load/start"})
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type:"imagesId/load/success",
                    payload: json
                })
            })
    }
}
export const createComments =(comments) => {
    return{
        type:"comments/create",
        payload:comments
    }
}
export const addComments =(comments) => {
    return{
        type:"comments/add",
        payload:comments
    }
}
export const deleteModal =() => {
    return{
        type:"modal/delete"
    }
}