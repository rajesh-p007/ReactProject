import React from 'react';
import { Route , Switch , Link, BrowserRouter as Router } from 'react-router-dom';
import './LoginPage.css';
import HomePage from './HomePage.js';
import BackgroundLogin from '../images/il-login-page.png'


 class LoginPage extends React.Component {
  constructor(props) {
    super(props);
      this.state = {user:'', password:''};
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleUserChange(event) { 
      this.setState({user: event.target.value});
    }

    handlePasswordChange(event) { 
      this.setState({password: event.target.value});
    }
  
    handleSubmit(event) {
      if(this.state.user == "lloyds" && this.state.password == "lloyds123")
       this.props.history.push('/home')
       else
       alert("Enter valid Username")
    }

  render(){

        return (
      <div className="login" style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
        <div className='llyods_login container-fluid'>
          <div className='logo_open_bank'>
            <span>OPTIMA</span><small style={{ marginLeft: '6px', paddingTop: '10px', fontSize: '16px' }}><i>Pay Less, Save More</i></small>
          </div>
          <div className='row'>
            <div className='col-7' style={{ paddingLeft: '50px' }}>
              <img style={{ width: '85%' }} src={BackgroundLogin} />
            </div>
            <div className='col-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <form onSubmit={this.handleSubmit}>
              <div className='Login_Background' style={{ paddingTop: '49px', paddingLeft: '38px' }}>
                
                <div className='Sign_in_to_your_account'>
                  Sign in to your account
                </div>
                <div className="buttons" style={{ width: '80%' }}>
                  <div style={{ marginTop: '19.9px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ float: 'left' }}>
                      <input name="type" value="retail" type='radio' id="retail" /> Personal
                      </div>
                    <div style={{ float: 'right' }}>
                      <input name="type" value="commercial" type='radio' id="commercial" /> Commercial
                      </div>
                  </div>
                </div>
                <input type='text' className='field_outline' style={{ marginTop: '28px' }}
                  placeholder='User name' id="username" autoFocus={true}
                  name="user" value={this.state.value} onChange={this.handleUserChange} />
                <input type='password' className='field_outline' style={{ marginTop: '13.9px' }} ref="password"
                  placeholder='Password' id="pwd"
                  value={this.state.value} onChange={this.handlePasswordChange} />
                <div style={{ marginTop: '19.9px' }}>
                  <div style={{ float: 'left', marginRight: '10px' }}>
                    <input type='checkbox' />
                  </div>
                  <div>
                    <div>Keep me signed in</div>
                  </div>
                </div>
            
        <button type="submit"  className='form-control button_background ' style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer'
        }}
        
         >
          SIGN IN  
        </button>
        
        
        
    
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
