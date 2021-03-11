import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams } from  "react-router-dom"
import {deleteModal, loadImagesId} from "../redux/actions";
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
    const imagesId = useSelector(state => state.imagesId.items);

   const handleDeleteModal=(id,) => {
       dispatch(deleteModal(id))
   }

    return (
            <div className= {imagesId.url ? 'modal': false}>
                <div className={ imagesId.url ?'content-modal':false}>
                <div className="content-image ">
                        {<img className={imagesId.url&&"imj-content"} src={imagesId.url} alt=""/>}
                    <div>
                        {imagesId["comments"] ? imagesId["comments"].map((w,index) => {
                                return (
                                    <>
                                        <div key={index} className="content-date">
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
                    <span onClick={() =>handleDeleteModal(imagesId.id)}
                          className={imagesId.url?"delete-modal":"no-delete"}>X</span>
                </div>
                {imagesId.url ? (<Input id={imagesId}/>) : false}
                </div>

                </div>
    );
}

export default ImagesId;

