import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createComments} from "../redux/actions";
import {useParams} from "react-router-dom"
import {useEffect} from "react";
function Input(props) {
    const dispatch =useDispatch();

    const handleChangeComment= (e)=>{
        dispatch(createComments(e.target.value))
    }
    return (
        <div className="input-main" >
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Ваше имя"/>
                    </div>
                    <div >
                        <input  onChange={() => handleChangeComment(props.id)} type="text" placeholder="Ваш комментарий"/>
                    </div>
                </form>
               <Link to={`/${props.id}`}>
                   <button className="content-button">Оставить комментарий</button>
               </Link>
            </div>
        </div>
    );
}

export default Input;