import React, { Component } from "react";
import ReactDOM from "react-dom";
import Child from "./child";
 


let AfterFilterData =[];



export default class Productlist extends Component {



 

 constructor(props) {
   


   super();

   this.state = {
    data : [{
      "id": "1",
      "name": "product1",
      "description":"this is good product",
      "salarybefore":16500,
      "salary": 15000,
    }, {
      "id": "2",
      "name": "product2",
      "description":"this is good product",
      "salarybefore":6500,
      "salary": 5000,
    },
    {
      "id": "3",
      "name": "product3",
      "description":"this is good product",
      "salarybefore":8500,
      "salary": 7000,
    },
    {
      "id": "4",
      "name": "product4",
      "description":"this is good product",
      "salarybefore":9500,
      "salary": 8000,
    },
    {
      "id": "5",
      "name": "product5",
      "description":"this is good product",
      "salarybefore":19500,
      "salary": 18000,
    },
    
    {
      "id": "6",
      "name": "product6",
      "description":"this is good product",
      "salarybefore":39000,
      "salary": 38000,
    },
    
    
    {
      "id": "7",
      "name": "product7",
      "description":"this is good product",
      "salarybefore":49000,
      "salary": 45000,
    },
    
    
    {
      "id": "8",
      "name": "product8",
      "description":"this is good product",
      "salarybefore":89000,
      "salary": 75000,
    },
    {
      "id": "9",
      "name": "product9",
      "description":"this is good product",
      "salarybefore":89000,
      "salary": 75000,
    },
    {
      "id": "10",
      "name": "product10",
      "description":"this is good product",
      "salarybefore":89000,
      "salary": 75000,
    }
    
    
    ],
    AfterFilterData : []
  
   };


   this.render = this.render.bind(this);
 }
 
 handleChange(e) {

  console.log("changed")
 

}


 render() {
  console.log("From render")
  console.log(this.props.minvalproductlist)
  console.log(this.props.maxvalproductlist)





 var $this = this;
 $this.state.AfterFilterData = [];
 
   this.state.data.map(function(item){
     if($this.props.minvalproductlist < item.salary && item.salary < $this.props.maxvalproductlist){
      $this.state.AfterFilterData.push(item);
     }

   })

   



   return (


 <div class="row">
   
    {this.state.AfterFilterData.map(item => 
    <Child
      options={item}
    />
    
    )}
 </div>


    
   );
 }
}


 

