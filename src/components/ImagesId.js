import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams , Route} from  "react-router-dom"
import {loadImagesId} from "../redux/actions";
import {useEffect} from "react";
import Input from "./Input";



function ImagesId(props) {
    const dispatch = useDispatch();
    const id = parseInt(useParams().id)
    const addComment = useSelector(state => state.imagesId.addComments)

    useEffect(() => {
        if (id !== undefined) {
            dispatch(loadImagesId(id))
        }
    }, [id, dispatch]);
    const imagesId = useSelector(state => state.imagesId.items)


    return (
        <>
            <div className="content-image">
                <div>
                    {<img className="imj-content" src={imagesId.url} alt=""/>}
                </div>
                <div>
                    {imagesId["comments"] ? imagesId["comments"].map(w => {
                            return (
                                <>
                                    <div className="content-date">
                                        {new Date(w.date).toISOString().substr(0, 10)}
                                    </div>
                                    <div className="content-text">
                                        {w.text}
                                    </div>
                                    <div className="addComment">
                                        {addComment}
                                    </div>


                                </>
                            )
                        })
                        : ""}
                </div>

            </div>
            {imagesId.url ? (<Input id={imagesId}/>) : false}
        </>
    );
}

export default ImagesId;

