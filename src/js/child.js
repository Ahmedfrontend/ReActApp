import React, { Component } from "react";
import ReactDOM from "react-dom";

 



export default class Child extends Component {
  render() {
    let {options:{name,description,salary}} = this.props
    return (
          
<div class="col-md-4 boxrept">
<img src="./img/screen1.png" />
<br />
<br />
{name}<br />
{description}
<br />
{salary}


</div>
    );
  }
};
 




