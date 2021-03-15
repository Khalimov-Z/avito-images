
import {useDispatch, useSelector} from "react-redux";
import {addComments, createComments} from "../redux/actions";

function Input(props) {
    const dispatch =useDispatch();
    const comment = useSelector(state => state.imagesId.comment);

    const handleChangeComment= (e)=>{
        dispatch(createComments(e.target.value))
    }
   const handleAddComment = () => {
      dispatch(addComments(comment))
   }
    return (
        <div className="input-main" >
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Ваше имя"/>
                    </div>
                    <div >
                        <input value={comment}  onChange={ handleChangeComment} type="text" placeholder="Ваш комментарий"/>
                    </div>
                </form>

                    <button onClick={handleAddComment} className="content-button">Оставить комментарий</button>

            </div>

        </div>
    );
}

export default Input;