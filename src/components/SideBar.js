import React from 'react';
import './SideBar.css';
import report from '../images/report.png'
import wallet from '../images/icwallet.png'
import home from '../images/home.png'

export default class SideBar extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
        <div className="sidebar-wrapper" style={{ display: "flex", flexDirection: 'column', background: 'white' }}>
        <div style={{ padding: "20px", borderLeft:'', marginTop: '121px' }}>
           <img style={{ cursor: 'pointer' }} className='ic_home' src={home} />
        </div>
        <div style={{ padding: "20px", borderLeft:'', marginTop: '60px' }}>
          
            <img className='ic_home' src={wallet} />

        </div>
        <div style={{ padding: "20px", marginTop: '60px' }}>
          <img className='ic_home' src={report} />
        </div>
      </div>
    );
  }
}
