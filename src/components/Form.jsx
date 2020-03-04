import React, { Component } from 'react';
import { FormErrors } from '../components/FormErrors';
import './Form.css';
import SUDH_logo_1 from '../assets/SUDH_logo_1.png';
import linkedin_icon_flat from '../assets/linkedin_icon_flat.png';


class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmpassword:'',
      fname: '',
      sname:'',
      username:'',
      formErrors: {email: '', password: ''},
      emailValid: false,
      fnameValid:false,
      lnameValid:false,
      passwordValid: false,
      formValid: false,
      usernameValid:false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { password, confirmpassword } = this.state;
    // perform all neccassary validations
    if (password !== confirmpassword) {
        alert("Passwords don't match");
    } else {
        // make API call
    }
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let lnameValid=this.state.lnameValid;
    let fnameValid=this.state.fnameValid;
    let usernameValid=this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'fname':
        fieldValidationErrors.fname = fnameValid ? '' : ' is invalid';
      case 'lname':
        fieldValidationErrors.lname = lnameValid ? '' : ' is invalid';
      case 'username':
        fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,fnameValid: lnameValid,fnameValid: lnameValid,usernameValid:usernameValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.lnameValid && this.fnameValid && this.usernameValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
        <form className="demoForm">
        <img src={SUDH_logo_1} className="linkedin-logo" alt="SUDH_logo_1.png"></img>
        <h5 class="h5" align="center">Please complete to create your account</h5><br></br>

        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>

            <input type="text" required className="form-control" name="fname"
            placeholder="First Name"
            value={this.state.fname}
            onChange={this.handleUserInput}/>
            <br/>

        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            <input type="text" required className="form-control" name="lname"
            placeholder="Last Name"
            value={this.state.lname}
            onChange={this.handleUserInput} />
            <br/>

        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>

                <input type="text" required className="form-control" name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUserInput}  /><br/>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>

          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  /><br/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          {/* <label htmlFor="password">Password</label> */}
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  /> <br/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          {/* <label htmlFor="password">Password</label> */}
          <input type="password" className="form-control" name="confirm-password"
            placeholder="Confirm Password"
            value={this.state.confirmpassword}
            onChange={this.handleUserInput}  />
        </div>
        {/* <div className="remember-me">
        <label>
        <input type="checkbox" checked="checked" name="remember"/>
        </label>
        </div><br/><br/> */}
        
        <button type="submit" className="btn btn-danger" disabled={!this.state.formValid}>Sign Up</button><br/><br/>
        <div>
          <p><b>Or Login With</b></p>
          <img src={linkedin_icon_flat} className="App-logo-sudh" alt="linkedin_icon_flat.png"></img>
        </div>
      </form>
    )
  }
}

export default Form;
