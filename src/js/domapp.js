import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sliderfiled from "./sliderfiled";
import Productlist from "./productlist";




class Domapp extends Component {
constructor(props) {
      
      super(props);
   
      this.state = {
    minvalfather:2000,
    maxvalfather:50000
      };

      this.onGreet = this.onGreet.bind(this);


}


    
componentDidMount(){
  

}

onGreet(minvalfatherCome,maxvalfatherCome){
 

this.setState({
    minvalfather: minvalfatherCome,
    maxvalfather: maxvalfatherCome
});






}




    
    render() {
   
      
     
   
   
   
   
   
      return (
        <div class="row" >


        <div class="col-md-4">
                        <ul class="nav navbar-nav border-menu">
                                        <li class="fristRow">SHOP BY</li>
                                        <li class="pirceli">
                                                <b>PRICE</b>

                                                <div class="input-group mt10">
                                        <Sliderfiled 
                                        sliderfiledminvalue={this.state.minvalfather} 
                                         sliderfiledmaxvalue={this.state.maxvalfather}  
                                         greet={this.onGreet}  
                                         />
                                                              </div>

                                                              <div class="row mt10">
                                                                      <div class="col-6">
                                                                                2,000 EGP
                                                                      </div>
                                                                      <div class="col-6 text-right">
                                                                                100,000 EGP
                                                                      </div>
                                                              </div>
                                        </li>
                                       
                                      </ul>
        </div>

        <div class="col-md-8" >
        <Productlist 
        minvalproductlist={this.state.minvalfather} 
        maxvalproductlist={this.state.maxvalfather}  
         />
               
                
                </div>
</div>
   

  
       
       )
       
       
       }
 
   
   
       
    
    }
 
    export default Domapp


    const wrapper = document.getElementById("app");
    wrapper ? ReactDOM.render(<Domapp  />, wrapper) : false;