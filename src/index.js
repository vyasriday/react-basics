import React, { Component } from "react";
import {render} from "react-dom"; // just import render to use it directly instead of ReactDOM.render
import SkiDaysCounter from './components/SkiDay';
import FunctionalSkiDayCounter from "./components/FunctionalSkiDay";
import Library from "./components/Library";
import ReactForm from "./components/Form";
import PropTypes from 'prop-types';

Library.propTypes = {
  books: PropTypes.array
}

let skiData = {
  total: 25,
  powder: 20,
  backcountry: 10,
  goal: 100
};

let style = {
  border: '1px solid skyblue',
  margin: '8px',
  padding: '5px'
}

let bookList = [
  {title : "Deep Work", author : "Carl Newport"},
  {title : "Homo Sapiens", author : "Yuva Noah", pages: 546},
  {title : "21 Days of Summer", pages: 210}

]

// Using React's Component class to create a component
class Message extends Component {
  // every class component in React has a render method
  render() {
		return(
    <div>
      <h1 style={{ color: this.props.color }}> {this.props.msg}</h1>
      <h2> I am {this.props.age} </h2>
		</div>
		)
  }
}

// to pass anything other than string to props we need to wrap the value in JSX {}.
render(
  <div>
    <div style={style}>
    <h3>  Basic component to show use of props</h3>
    <Message color="blue" msg="Hello From React" age={16.6} />
    </div>
    <div style={style}>
    <h3> This is a Class Based Compoennt</h3>
    <SkiDaysCounter total = {skiData.total}
      powder = {skiData.powder}
      backcountry = {skiData.backcountry}
      goal = {skiData.goal}
    />
    </div>
    <div style={style}>
    <h3> This is the same as above, but a Functional Component</h3>
    <FunctionalSkiDayCounter total = {skiData.total}
      powder = {skiData.powder}
      backcountry = {skiData.backcountry}
      goal = {skiData.goal} 
    />
    </div>
    <div style={style}>
      <Library books = {bookList} />
    </div>
    <div style={style}>
      < ReactForm/>
    </div>
  </div>,  
  document.getElementById("root")
);
