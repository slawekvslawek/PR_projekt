import React from 'react';
import {withRouter} from "react-router-dom";

class Search extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {val: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event:any) {
        this.setState({val: event.target.value});
    }

    handleSubmit(event:any) {
        event.preventDefault();
        const link = '/details/' + this.state.val;
        this.props.history.push(link);
    }

 render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <div className="Search">
                <input className="form-control" type="text" value={this.state.val} onChange={this.handleChange} placeholder="Podaj ID filmu/serialu"  />
                <button className="btn btn-outline-success btn-dark my-3 my-sm-0 me-4" type="submit">Szukaj</button>
              </div>
            </form>
        );
    }
}
export default withRouter(Search);