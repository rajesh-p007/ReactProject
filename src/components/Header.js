import React from 'react';
import './Header.css';
import not from '../images/not.png';
import imgu from '../images/img-u.png'
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '10' }}>
          <div className='Rectangle-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ padding: "20px", cursor: 'pointer' }}
              tabIndex='1'>
              <span className='OPEN-BANK'>OPTIMA</span>
              <small style={{ marginLeft: '5px', paddingTop: '10px' }}><i>Pay Less, Save More</i></small>
            </div>
            <div style={{ width: '20%', margin: '0' }} className="row">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '0.5px solid rgb(151, 150, 150, .39)' }} className="col">
                <img className="notification-1" src={not} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="col">
                <img className="img_user" src={imgu} />
                <p style = {{marginTop : '20px' , marginLeft : '10px'}}>{this.props.user}</p>
              </div>
              
              <div style={{ display: 'flex', color: 'rgb(216, 217, 222)', justifyContent: 'center', alignItems: 'center' }} className="col">
                <Link to="/login"><i className="fa fa-sign-out logout"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}
export default Header