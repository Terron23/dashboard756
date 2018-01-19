
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'


class Labels extends Component {
    render() {
      return ( <div className="row placeholders">
      <div className="col-xs-6 col-sm-3 placeholder" >
        <div  className="data-card">
        </div>
        <h4>Label</h4>
        <span className="text-muted">Something else</span>
      </div>
      <div className="col-xs-6 col-sm-3 placeholder">
      <div  className="data-card">
        </div>
        <h4>Label</h4>
        <span className="text-muted">Something else</span>
      </div>
      <div className="col-xs-6 col-sm-3 placeholder">
      <div  className="data-card">
        </div>
        <h4>Label</h4>
        <span className="text-muted">Something else</span>
      </div>
      <div className="col-xs-6 col-sm-3 placeholder">
      <div  className="data-card">
        </div>
        <h4>Label</h4>
        <span className="text-muted">Something else</span>
      </div>
    </div>
    )
    }
}

class DashBoard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          posts: [],
          num: '',
          email: 'Update',
          change: '1'
        };
        this.handleChange = this.handleChange.bind(this);
        
        //this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(api) {
      return (e) => {
        var state = {};
        state[api] = e.target.value;
        alert(state[api])
        this.setState(state);
      }//.bind(this);
    }
    

    componentDidMount() {
       // let number = this.handleName();
       // axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
       axios.get("http://localhost:3001/drop")
       .then((data) => {
        console.log('data:', data.data);
    var t = data.data
    this.setState({posts:t})
      }).catch(error => {
        console.log('Error fetching and parsing data', error);
      });     
      }
  render() {
    return (
<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
     <Labels />
          <h2 className="sub-header">Section title</h2>
          <form action="/" onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label for="email">Drop Down:</label>
    <select  
    onChange={this.handleChange('change')} 
    name="email" 
    className="form-control"
     id="drop">
  {this.state.posts.map((topic, i) =>{
    
      return <option key={topic.CustomerID}>{topic.CustomerID}</option>
    
    
  })}

     </select>
  </div>
  <button className="btn btn-primary">Submit</button>
</form>    
          
        </div>
  
)
}
}       
export default DashBoard;