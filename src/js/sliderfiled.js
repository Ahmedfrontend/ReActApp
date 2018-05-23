import React, { Component } from "react";
import ReactDOM from "react-dom";




export default class Sliderfiled extends Component {
 
    
 constructor(props) {
 
    
    super(props);

    this.state = {
        slidervalue : "[2000,100000]"
    }
 }



componentDidMount(){
    var SalaryMinRange = $('#ex2').slider().data('slider').getValue()[0];
    var SalaryMaxRange = $('#ex2').slider().data('slider').getValue()[1];
     
var $this = this;
$this.props.sliderfiledminvalue = SalaryMinRange;
this.props.sliderfiledmaxvalue = SalaryMaxRange;
$('#ex2').slider().on('change', function(event) {
SalaryMinRange = event.value.newValue[0];
SalaryMaxRange = event.value.newValue[1];
$this.props.sliderfiledminvalue = SalaryMinRange;
$this.props.sliderfiledmaxvalue = SalaryMaxRange;
$this.props.greet(SalaryMinRange,SalaryMaxRange);


    });



  


  
     // set el height and width etc.

}
    render() {


 


        const { slidervalue } = this.state;
        return (
            
            <input id="ex2" type="text" class="span2" value="" data-slider-min="2000" data-slider-max="50000" data-slider-step="5" data-slider-value={slidervalue} onChange={this.handleChange}/>                       

        )
    }
}