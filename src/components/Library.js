import React, { Component } from 'react';
import Book from './Book';
import { Hiring, NotHiring } from './Hiring';
import './library.css';
import User from './User';

class Library extends Component {

  // default props which will be usd if no props are provided. We write this as it is.
  static defaultProps = {
    books: [
      {title : "Default Title", author: "Default Author", pages: 200}
    ]
  }
  
  // by using state object like this we do not need to initialize state via constructor but we still need to bind this for toggleOpenClose
  state = {
    open: true,
    freeBookmark: true,
    hiring: false,
    data: {},
    loading: false
  }
  // by setting toggleOpenClose as arrow function we automatically bind this for toggleOpenClose with class
  toggleOpenClose = () => {
    this.setState(prevState => ({
      open: !prevState.open
      }
    ))
  }

  // componentDidMount gets called whenever a component is mounted 
  componentDidMount() {
    console.log('The Library Component is Mounted');
    this.setState({
      loading : true
    })
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(data => data.json())
      .then(data => this.setState({
        data,
        loading: false
      }));
  }

  // componentDidUpdate gets called when a component or it's children gets updated
  componentDidUpdate() {
    console.log('Library component is updated!!!');
  }

  toggleConditionalComponent = () => {
    this.setState(prevState => ({
      hiring: !prevState.hiring
    }))
  }
  render() {
    // It is necessay that each child component should have a unique key, that's why we add the key property
    return(
      <div>
        <div className="conditional">
          <h4> Rendering Components Conditionally</h4>
          <button onClick={this.toggleConditionalComponent}> Click to change the compoennt</button>
          {this.state.hiring ? <Hiring />: <NotHiring /> }
        </div>
        <h1> The Library is {this.state.open ? 'Open' : 'Closed'}</h1>
        <button onClick={this.toggleOpenClose}>Toggle Library State</button>
        {this.props.books.map(
           (book, key) => <Book
           key={key} 
           title={book.title} 
           author={book.author}
           pages={book.pages} 
           freeBookmark= {this.state.freeBookmark}
           /> 
        )}

        <div>
          <h2> Best Library User </h2>
          {this.state.loading ? 'Loading...': <User user={this.state.data} />}
        </div>
      </div>
    )

  }
}

export default Library;