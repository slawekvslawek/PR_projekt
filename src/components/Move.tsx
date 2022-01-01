import React from 'react'
import { Link } from 'react-router-dom';

const Move = (props: any) => {
  return (
    <div className="col">
      <div className="card">
            <img src="https://www.shareicon.net/data/128x128/2016/01/11/701552_cinema_512x512.png" className="card-img-top" alt="zdj" height="200"></img>
            <div className="card-body">
                  <h5 className="card-title">Tytuł filmu</h5>
              <p className="card-text">Opis filmu, informacje, aktorzy, postacie, kina, ciekawostki</p>
              <Link to="/details"><a href="#" className="btn btn-primary">Zobacz więcej</a></Link>
            </div>
       </div>
    </div>

  );
}
export default Move;