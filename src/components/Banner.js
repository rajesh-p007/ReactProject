import React from 'react';
import './Banner.css';
import imgBanner from '../images/Banners/img-banner.png'

export default class Banner extends React.Component{
  constructor(){
    super();
  }

    render(){
      
        return(
     

    <div>
    <div className="title">
      <p className = 'My_financials'>My financials</p>
    </div>
    <div className = 'banner-11' style={{display:'flex' ,backgroundRepeat:'no-repeat'}}>
        <div className="banner-col">
          <span className = 'Savings-accounts1' style ={{whiteSpace: 'nowrap',display: 'block'}}>Debit Accounts</span>
          <span className = 'layer1'>3</span>
          <span className = 'Credit-Accounts1' style ={{whiteSpace: 'nowrap'}}>Credit Accounts</span>
          <span className = 'layer1'>3</span>
        </div>
        <div  style = {{display:'flex',flexDirection:'column'}}>
        <span className = 'Savings-accounts1'  style ={{whiteSpace: 'nowrap'}}>Debit Balance</span>
        <span className = 'layer1' style ={{whiteSpace: 'nowrap'}}>£ 12500</span>
        <span className = 'Credit-Accounts1'  style ={{whiteSpace: 'nowrap'}}>Credit outstanding</span>
        <span className = 'layer1' style ={{whiteSpace: 'nowrap'}}>£ 3800</span>
        </div>
        <div  style = {{display:'flex',flexDirection:'column'}}>
        <span className = 'Want-to-reduce-your1' style={{paddingRight:'30px'}}>Looking for best option to
maximise your savings
and optimise your
expenses ? </span>
          <div className = 'Rectangle-41' style = {{padding:"16px 45px 16px 36px",
          display:'flex',marginTop:'16px',cursor:'pointer'}}
           tabIndex = '1'>
            <span className = 'YES1' >YES</span><i style = {{ color:'white'}} className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
  </div>
        );
    }
}