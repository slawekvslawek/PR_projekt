import React, {Component} from "react";
import {Link} from "react-router-dom";
import Name from "./Name";
import { History, LocationState } from "history";
import {withRouter} from "react-router-dom";
const axios = require('axios');

interface FormLoginProps {
 someOfYourOwnProps: any;
 history: History<LocationState>;
 someMorePropsIfNeedIt: any;
}

class AddMovie extends Component<FormLoginProps, {}> {
    state:any = {
            movie: {
                title: "",
                image: "",
                content: "",
            },
            errors: {}
        };

    handleChangeRoute = () => {
        alert("Dodano nowy film/serial.")
        this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
            const errors:any = {};

            const {movie} = this.state;
            if (movie.title.trim() === '') {
                errors.title = 'Title is required!';
            }
            if (movie.image.trim() === '') {
                errors.image = 'Image is required!';
            }
            if (movie.content.trim() === '') {
                errors.content = 'Content is required!';
            }

            return Object.keys(errors).length === 0 ? null : errors;
    };

    handleChange = (event:any) => {
            const movie:any = {...this.state.movie};
            movie[event.currentTarget.name] = event.currentTarget.value;
            this.setState({movie});
    };

    handleSubmit = (event:any) => {
                event.preventDefault();

                const errors = this.validate();
                this.setState({errors: errors || {}});
                if (errors) return;

                axios({
                    method: 'post',
                    url: 'https://pr-movies.herokuapp.com/api/movies',
                    data: {
                        title: this.state.movie.title,
                        image: this.state.movie.image,
                        content: this.state.movie.content,
                    }
                }).then((response:any) => {
                    this.handleChangeRoute();
                }).catch((error:any) => {
                    const errors:any = {};
                    this.setState({errors: errors || {}});
                    console.log(error);
                });
    };

  render(){
  return (
  <div className="container">
                  <div className="App">
                      <Name />
                  </div>
                  <form onSubmit={this.handleSubmit}>
                      <div className="row mb-2">
                       <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label"><p className="text-danger">Podaj Tytul:</p></label>
                        <div className="col-sm-8">
                          <div className="w-100 p-2">
                          <input value={this.state.movie.title} type="text" name='title' onChange={this.handleChange} className="form-control" id="title" placeholder='Podaj tytul'></input>
                          </div>
                        </div>
                      </div>
                      {this.state.errors.title &&
                      <div className="alert alert-danger">{this.state.errors.title}</div>}
                      <div className="row mb-3">
                         <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label"><p className="text-danger">Dodaj zdjecie:</p></label>
                            <div className="col-sm-8">
                            <div className="w-100 p-2">
                              <input value={this.state.movie.image} type="text" name='image' onChange={this.handleChange} className="form-control" id="image" placeholder='Zdjecie - Link'></input>
                            </div>
                        </div>
                      </div>
                      {this.state.errors.image &&
                      <div className="alert alert-danger">{this.state.errors.image}</div>}
                      <div className="row mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="col-sm-2 col-form-label"><p className="text-danger">Dodaj nowy film/serial:</p></label>
                        <div className="col-sm-8">
                        <div className="w-100 p-2">
                        <textarea value={this.state.movie.content} name='content' onChange={this.handleChange} className="form-control" id="content" placeholder='Opis filmu/serialu' />
                         </div>
                          </div>
                         </div>
                         {this.state.errors.content &&
                         <div className="alert alert-danger">{this.state.errors.content}</div>}
                     <div className="col-12 text-center">
                         <button type="submit" className="btn btn-primary">Dodaj nowy film/serial</button>
                         <Link to="/"><button className="btn btn-primary" >Powrot do strony glownej</button></Link>
                      </div>
                    </form>
                  </div>
  );
  }
}
export default withRouter(AddMovie);