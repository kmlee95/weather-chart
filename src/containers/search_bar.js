import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';



class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={ term: ''};
        this.onInputChange = this.onInputChange.bind(this); // bind해줘야한다..(this가 SearchBar컴포넌트 것 이란걸 알기위해)
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(event){
        //항상 event가 따라옴(onChange나 hover, click, scroll 등등)
        //console.log(event.target.value);
        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
        //weather data
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});//input 초기화
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className = "form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className = "input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);