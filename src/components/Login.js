import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = this.state
    fetch("http://localhost:3000/api/v1/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(json => {
      if (json.status == "accepted") {
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
      this.props.history.push("/home")
    } else {
      alert("Your credentials are incorrect, try again")
    }
    })
  }

  render() {
    return (<div className="login">
      <form onSubmit={this.handleSubmit}>
        <center><input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
        <br></br>
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/></center>
        <center>
          <button type="submit">Login</button>
        </center>
      </form>
      <center>
        <Link to="/register">Need to sign up? Register here</Link>
      </center>
    </div>)
  }
}

export default Login;
