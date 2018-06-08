import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/* 
step2 Board  

create cells

cells={this.state.boardArrVal}

cells  infor I need
number of cells   length
id of the cell      map
stringVal of the cell

cellClickHandler={this.cellClickHanlder}
add it to every cell


*/

class Board extends Component {
    /* 
    
    according to the array passed,
    create cells
    pass the state and click event handler to it


    cells
    */

    // arr ["", "", "", "", "", "", "", "", ""],

    render() {
        const cells = this.props.cells.map((strVal, cellIdx) => {
            return (
                <Cell
                    key={cellIdx}
                    strValue={strVal}
                    id={cellIdx}
                    clickHandler={this.props.cellClickHandler}
                />
            );
        });

        return <ul className="board">{cells}</ul>;
    }
}

export default Board;
