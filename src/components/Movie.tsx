import React from 'react'
import { Link } from 'react-router-dom';

class Movie extends React.Component <any, any> {

  render(){
  const link = "details/" + this.props.id;

  return (
    <div className="row">
      <div className="col-sm-6">
      <div className="card bg-dark text-white">
            <img src={this.props.image} className="card-img-top" alt="zdj" height="300"></img>
            <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.content}</p>
              <Link to={link}><a href="#" className="btn btn-primary bg-info text-dark">Zobacz więcej</a></Link>
            </div>
       </div>
    </div>
    </div>

  )
  }
}

export default class Movies extends React.Component <any, any> {
    constructor(props:any) {
                super(props);

                this.state = {
                    movies: [],
                    isLoaded: false,
                };

            }

        componentDidMount() {
                fetch(
                    "https://pr-movies.herokuapp.com/api/movies")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            movies: json,
                        });
                    })
            }
    render(){
    const {movies} = this.state;

    return(
        <div className='row'>
            {movies.map((movie:any) => (
            <div className='col-sm'>
            <div className='test'>
                <Movie className='col p-2' title={movie.title} image={movie.image} id={movie.id}/>
                </div>
            </div>
            ))}
            </div>
    )
    }
}