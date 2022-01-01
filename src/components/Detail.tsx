import React from 'react'

const Detail = (props: any) => {
    return (
    <div className="col">
          <div className="card">
                <img src="https://www.shareicon.net/data/128x128/2016/01/11/701552_cinema_512x512.png" className="card-img-top" alt="zdj" height="200"></img>
                <div className="card-body">
                      <h5 className="card-title">Tytuł filmu</h5>
                  <p className="card-text">Opis filmu, informacje, aktorzy, postacie, kina, ciekawostki</p>
                  <a href="#" className="btn btn-primary">Zobacz więcej</a>
                </div>
           </div>
        </div>
    );

}
export default Detail;