import React from 'react';
import { Route , Switch , Link, BrowserRouter as Router } from 'react-router-dom';
import './LoginPage.css';
import HomePage from './HomePage.js';
import { withRouter } from 'react-router-dom';
import BackgroundLogin from '../images/il-login-page.png'


 class LoginPage extends React.Component {
  constructor() {
    super();

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
                  placeholder='User name' defaultValue='alice' id="username" autoFocus={true} />
                <input type='password' className='field_outline' style={{ marginTop: '13.9px' }}
                  placeholder='Password' defaultValue='wonderland' id="pwd" />
                <div style={{ marginTop: '19.9px' }}>
                  <div style={{ float: 'left', marginRight: '10px' }}>
                    <input type='checkbox' />
                  </div>
                  <div style={{}}>
                    <div className=''>Keep me signed in</div>
                  </div>
                </div>
                
        <button className='button_background ' style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer'
        }}
        
         >
          SIGN IN  
        </button>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;