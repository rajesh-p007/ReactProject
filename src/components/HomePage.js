import React from 'react';
import { withRouter } from 'react-router-dom'; 
import Header from './Header.js';
import SideBar from './SideBar.js';
import Banner from './Banner.js';
import Balance from './Balance.js';
import './HomePage.css';
import imagead from '../images/image-ad@3x.png'

class HomePage extends React.Component{
  constructor(){
    super();
  }


    render(){
        
        return(
            <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
            <Header />
            <div style = {{display:"flex"}}>
              <SideBar />
            <div className='row main-content' style = {{width:"94.5%",height:'100vh',overflow:'auto'}}>
              <div className='col-9' style={{paddingTop:'8%'}}>
              <Banner />
              </div>
              <div className='col-9'>
              <Balance />
              </div>
              <div className='col-3'>
              <img style = {{height:'450px',width:'280px',marginTop:'10%'}} src={imagead} />
              </div> 
              </div>
              
            </div>
          </div>
           
        );
    }
}

export default HomePage;