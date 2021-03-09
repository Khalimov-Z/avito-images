import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadImages} from "../redux/actions";
import Header from "./Header";
import Images from "./Images";
import Footer from "./Footer";
import {Route} from "react-router-dom"
import ImagesId from "./ImagesId";
function App() {
  const dispatch =useDispatch();
  useEffect(() => {

    dispatch(loadImages())
  },[])


  return (
    <div className="container">
      <Header />
      <Route path="/:id?">
        <Images />
        <ImagesId />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
