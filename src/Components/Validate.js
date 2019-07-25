import React, { Component } from 'react';
import App from '../App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ThankYou from './ThankYou';
import '../Styles/App.css';
import validator from 'validator';
import MaterialIcon, {colorPalette} from 'material-icons-react';


class Validate extends Component {
  state = {
    name: '',
    nameError: '',
    nameClass: '',
    email: '',
    emailError: '',
    emailClass: '',
    username: '',
    usernameError: '',
    usernameClass: '',
    password: '',
    passwordError: '',
    passwordClass: '',
    confirm: '',
    confirmError: '',
    confirmClass: '',
    website: '',
    websiteError: '',
    websiteClass: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.username]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.confirm]: e.target.value,
      [e.target.website]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    let error = false;

    if(!validator.isLength(this.state.name, {min:4})) {
      error = true;

      this.setState({
        nameError: 'Name - Must Be Atleast 4 Characters',
        nameClass: 'error'
      });
    } else {
      this.setState({
        nameError: '',
        nameClass: ''
      })
    }

    if(!validator.isEmail(this.state.email)) {
      error = true;

      this.setState({
        emailError: 'Email - Must Be A Valid Email',
        emailClass: 'error'
      });
    } else {
      this.setState({
        emailError: '',
        emailClass: ''
      })
    }

    if(!validator.isLength(this.state.username, {min:4})) {
      error = true;

      this.setState({
        usernameError: 'Username - Must Be Atleast 4 Characters',
        usernameClass: 'error'
      });
    } else {
      this.setState({
        usernameError: '',
        usernameClass: ''
      })
    }

    if(!validator.isLength(this.state.password,{min:6})) {
      error = true;

      this.setState({
        passwordError: 'Password - Must Be Atleast 6 Characters',
        passwordClass: 'error'
      })
    } else {
      this.setState({
        passwordError: '',
        passwordClass: ''
    })
  }

    if(!validator.equals(this.state.password, this.state.confirm)) {
      error = true;

        this.setState({
          confirmError: 'Confirm Password - Must Match The Previous Entry',
          confirmClass: 'error'
        })

    } else {
      this.setState({
        confirmError: '',
        confirmClass: ''
    })
  }
 
    if(!validator.isFQDN(this.state.website)) {
      error = true;

      this.setState({
        websiteError: 'Website - Must Be A Valid URL',
        websiteClass: 'error'
      })
    } else {
      this.setState({
        websiteError: '',
        websiteClass: ''
    })
  }

  if(!error) {
    this.props.history.push('/thankyou')
  }
}

  


  render() {
    return (
      <form id="formWrap" onSubmit={this.handleSubmit}>
        <h1 id='mainHeading'>WANT TO SAVE OUR OCEAN?</h1>
        <h2 id='secondHeading'>Register Now To Join Our Mission!</h2>
        <div>
          <label htmlFor='name' id ='nameLabel' className={this.state.nameClass}>
            {this.state.nameError ? this.state.nameError : 'Name'}
          </label>
          <div className={'input ' + this.state.nameClass}>
            <MaterialIcon icon="wc" />
            <input className='registerInput'
              id='name' 
              name='name' 
              onChange={this.handleChange}
              type='text'
              value={this.state.name}>  
            </input>
          </div>
        </div>
        <div>
          <label htmlFor='email' id ='emailLabel' className={this.state.emailClass}>
            {this.state.emailError ? this.state.emailError : 'Email'}
          </label>
          <div className={'input ' + this.state.emailClass}>
            <MaterialIcon icon="email" />
            <input className='registerInput'
              id='email' 
              name='email'
              onChange={this.handleChange}
              type='text'
              value={this.state.email}>  
            </input>
          </div>
        </div>
        <div>
          <label htmlFor='username' id ='usernameLabel' className={this.state.usernameClass}>
            {this.state.usernameError ? this.state.usernameError : 'Username'}
          </label>
          <div className={'input ' + this.state.usernameClass}>
            <MaterialIcon icon="security" />
            <input className='registerInput'
            id='username'
            name='username'
            onChange={this.handleChange}
            type='text'
            value={this.state.username}>            
            </input>
          </div>
        </div>
        <div>
          <label htmlFor='password' id ='passwordLabel' className={this.state.passwordClass}>
            {this.state.passwordError ? this.state.passwordError : 'Password'}
          </label>
          <div className={'input ' + this.state.passwordClass}>
            <MaterialIcon icon="lock" />
            <input className='registerInput'
              id='password'
              name='password'
              onChange={this.handleChange}
              type='password'
              value={this.state.password}>
            </input>
          </div>
        </div>
        <div>
          <label htmlFor='confirm' id ='confirmLabel' className={this.state.confirmClass}>
            {this.state.confirmError ? this.state.confirmError : 'Confirm Password'}
          </label>
          <div className={'input ' + this.state.confirmClass}>
          <MaterialIcon icon="lock" />
            <input className='registerInput'
              id='confirm'
              name='confirm'
              onChange={this.handleChange}
              type='password'
              value={this.state.confirm}>  
            </input>
          </div>
        </div>
        <div>
          <label htmlFor='website' id ='websiteLabel' className={this.state.websiteClass}>
            {this.state.websiteError ? this.state.websiteError : 'Website'}
          </label>
          <div className={'input ' + this.state.websiteClass}>
            <MaterialIcon icon="public" />
            <input className='registerInput'
              id='website'
              name='website'
              onChange={this.handleChange}
              type='text'
              value={this.state.website}>
            </input>
          </div>
        </div>
        <div>
          <button id='submitButton' type='submit'>Register</button>
        </div>
      </form>
    )
  }
}


export default Validate;