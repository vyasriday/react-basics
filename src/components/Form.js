import React, {Component} from 'react';


class ReactForm extends Component {

  state = {value: ''}

  setColor = e => this.setState({value: e.target.value});
  
  submit = e => {
    console.log(`New Color ${this.state.value}`);
    e.preventDefault(); // to prevent the default behavior of form
  }
  render() {
    return (
      <div>
        <h3> Form in React </h3>
        <form onSubmit={this.submit}>
            <label> Favourite Color
              <input 
                type="color" 
                onChange = {this.setColor} />
            </label>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ReactForm;