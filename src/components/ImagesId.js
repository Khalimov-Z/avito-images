import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from  "react-router-dom"
import {createComments, loadImagesId} from "../redux/actions";
import {useEffect} from "react";
import Input from "./Input";



function ImagesId(props) {
    const dispatch = useDispatch();
    const id = parseInt(useParams().id)
    const loadingId =useSelector( state => state.imagesId.loading);
    const loadingImages =useSelector( state => state.images.loading)

    useEffect(() => {
        if(id !== undefined){
            dispatch(loadImagesId(id))
        }
    },[id,dispatch]);
    const imagesId =useSelector(state => state.imagesId.items)


    return (
        <>
        <div className="content-image">
            <div>
                { <img className="imj-content" src={imagesId.url} alt=""/>}
            </div>
            <div>
                {imagesId["comments"]? imagesId["comments"].map(w => {
                        return(
                            <>
                                <div className="content-date">
                                    {new Date(w.date).toISOString().substr(0,10)}
                                </div>
                                <div className="content-text">
                                    {w.text}
                                </div>
                            </>
                        )
                    })
                    : ""}
            </div>

        </div>
            {imagesId.url? (<Input id={id} />):false}
        </>
    );
}

export default ImagesId;

//  const rew = props.imagesId["comments"].map(ter => {
//        return   ter.text})
//     const date =props.imagesId["comments"].map(ter => {
//         return  new Date(ter.date).toISOString().substr(0,10)
//     })