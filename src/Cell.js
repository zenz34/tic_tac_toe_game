import React, { Component } from "react";
import "./Cell.css";
/*
cell
key={cellIdx}
strValue={strVal}
id={cellIdx}
clickHandler={this.props.cellClickHandler}




*/

class Cell extends Component {
    /* 
    
    show the passed string value
    add the click event handler 
    */
    render() {
        return (
            <li
                className="cell"
                onClick={() => {
                    this.props.clickHandler(this.props.id);
                }}
            >
                {this.props.strValue}
            </li>
        );
    }
}

export default Cell;
