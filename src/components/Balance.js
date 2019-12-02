import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import './Balance.css';

export default class Balance extends React.Component{

  constructor(){
    super()
    this.state = {
        debit_balance : [
            {
                id : 1,
                image : require('../images/cards/debit/halifax@2x.png'),
                name : "Halifax",
                AER : "0.2% AER",
                details : "PCA",
                amount : "$2500",
            },
            {
                id : 2,
                image : require('../images/cards/debit/hsbc@2x.png'),
                name : "HSBC",
                AER : "0.1% AER",
                details : "SB",
                amount : "$4000",
            },
            {
                id : 3,
                image : require('../images/cards/debit/barclays@2x.png'),
                name : "Barclays",
                AER : "0.25% AER",
                details : "SB",
                amount : "$6000",
            }
        ],
        credit_balance : [
            {
                id : 1,
                image : require('../images/cards/Credit/NatWest@2x.png'),
                name : "Natwest",
                APR : "37.1% APR",
                details : "PCA",
                amount : "$1800",
            },
            {
                id : 2,
                image : require('../images/cards/Credit/RBS@2x.png'),
                name : "RBS",
                APR : "19.94% APR",
                details : "SB",
                amount : "$1200",
            },
            {
                id : 3,
                image : require('../images/cards/Credit/Barclays@2x.png'),
                name : "Barclays",
                APR : "3.3% APR",
                details : "SB",
                amount : "$800",
            }
        ]
    }

  }

 
    render(){
      return (

        <div>
                          <div style={{display:'flex'}} >

                          <div className='paper' zDepth={2} style = {{padding:'10px',width: '50%',marginLeft:'30px'}}>
                             <div className='row credit-accounts' style = {{paddingBotttom:'23px'}}>
                                  <div className="col-10">Debit accounts</div>
                                  <div className="col-2">
                                      <svg aria-hidden="true" data-prefix="far" data-icon="chart-bar" className="svg-inline--fa fa-chart-bar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <title>Graphical View</title>
                                          <path fill="currentColor" d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path>
                                         
                                      </svg>
                                     
                                  </div>
                                  </div>
                                  <div className="row mt-3">
                            <div className="col-12 box">
                                <div className="m-2" style={{padding:'10px'}}>
                                    <Row>
                                        <Col md={10}>
                                       
                                        </Col>
                                        <Col md={2} style={{color:'green'}}>
                                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                    {
                                        this.state.debit_balance.map(data =>(
                                            <Row className="mt-2">
                                        <Col md={3}>
                                            <img width="120%" src={data.image} alt="Card"/>
                                        </Col>
                                        <Col md={4} className="ml-2">
                                        <p className="mb-0">{data.name}</p>           
                                        <b>{data.AER}</b>
                                        </Col>
                                        <Col md={3} >
                                            <div style={{borderRight:'1px solid gray', padding:'10px'}}>
                                        <b >{data.details}</b>
                                            </div>
                                        </Col>
                                        <Col md={1} style={{padding:'10px'}}>
                                            {data.amount}
                                        </Col>
                                     </Row>
                                        ))

                                        
                                    }
                                   
                                </div>
                           
                            </div>
                              </div>
                           
                          </div>

                          
                          <div className='paper' zDepth={2} style = {{padding:'10px',width: '50%',marginLeft:'-10px'}}>
                             <div className='row credit-accounts' style = {{paddingBotttom:'23px'}}>
                                  <div className="col-10">Credit accounts</div>
                                  <div className="col-2">
                                      <svg aria-hidden="true" data-prefix="far" data-icon="chart-bar" className="svg-inline--fa fa-chart-bar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <title>Graphical View</title>
                                          <path fill="currentColor" d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path>
                                         
                                      </svg>
                                     
                                  </div>
                                  </div>
                                  <div className="row mt-3">
                            <div className="col-12 box">
                                <div className="m-2" style={{padding:'10px'}}>
                                    <Row>
                                        <Col md={10}>
                                       
                                        </Col>
                                        <Col md={2} style={{color:'green'}}>
                                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                    {
                                        this.state.credit_balance.map(data => (
                                            <Row className="mt-2">
                                        <Col md={3}>
                                            <img width="120%" src={data.image} alt="Card"/>
                                        </Col>
                                        <Col md={4} className="ml-2">
                                            <p className="mb-0">{data.name}</p>           
                                        <b>{data.APR}</b>
                                        </Col>
                                        <Col md={3} >
                                            <div style={{borderRight:'1px solid gray', padding:'10px'}}>
                                                <b >{data.details}</b>
                                            </div>
                                        </Col>
                                        <Col md={1} style={{padding:'10px',color : "red"}}>
                                            {data.amount}
                                        </Col>
                                    </Row>
                                        ))
                                    }
                                    
                                    
                                </div>
                           
                            </div>
                              </div>
                            <div  style={{marginTop : '30px'}}>
                             <center id = 'outer-layer'>
                              <button className='btn payout-button optimize-btt optimizeBtn'>
                                <div className="btn-text-wrapper" style={{padding : '20px'}}>
                                  <div className="btn-text" >OPTIMIZE</div>
                                  <div className="btn-arrow">
                                    <i className='fas fa-arrow-right'></i>
                                  </div>
                                </div>
                              </button>
                            </center>
                            </div>
                          </div>
                          </div>
                         
                      </div>

      )}}