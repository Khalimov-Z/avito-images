import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams,useHistory } from  "react-router-dom"
import {deleteModal, loadImagesId} from "../redux/actions";
import {useEffect} from "react";
import Input from "./Input";



function ImagesId(props) {
    const dispatch = useDispatch();
    const id = parseInt(useParams().id)
    const comments = useSelector(state => state.imagesId.comments);
    const history =useHistory();

    useEffect(() => {
        if (!isNaN(id)) {
            dispatch(loadImagesId(id))
        }
    }, [id, dispatch]);
    const url= useSelector(state => state.imagesId.url);

   const handleCloseModal=() => {
       dispatch(deleteModal())
       history.push("/")
   }
   if (isNaN(id)){
       return null;
   }

    return (
            <div>
                <div className="deactivate" />
                <div className='content-modal'>
                <div   className="content-image ">
                        {<img className="imj-content" src={url} alt=""/>}
                    <div>
                        { comments.map((comment,index) => {
                                return (
                                    <div className="rod">
                                        <div key={index} className="content-date">
                                            {new Date(comment.date).toISOString().substr(0, 10)}
                                        </div>
                                        <div className="content-text">
                                            {comment.text}
                                        </div>

                                    </div>
                                )
                            })
                           }

                    </div>
                    <span onClick={handleCloseModal}
                          className="delete-modal">X</span>
                </div>
                     < Input />
                </div>

                </div>
    );
}

export default ImagesId;

