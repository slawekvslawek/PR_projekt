import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from "./Login";

const Detail = () => {

    let  {id}  = useParams();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    fetch(
       "https://pr-movies.herokuapp.com/api/movies/" + id)
       .then((res) => res.json())
       .then((json) => {
           setTitle(json.title);
           setImage(json.image);
           setContent(json.content);
    })

    return (
    <div className="container">
        <Login />
    <div className="App3">
    <div className="col">
          <div className="card bg-dark text-white">
                <img src={image} className="card-img-top" alt="zdj" height="300" ></img>
                <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                  <p className="card-text">{content}</p>
                  <Link to="/"><a href="#" className="btn btn-primary bg-info text-dark">Powrot do strony glownej</a></Link>
                </div>
           </div>
        </div>
        </div>
    </div>
    );

}
export default Detail;