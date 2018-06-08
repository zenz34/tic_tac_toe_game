import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';

import Board from "./Board";

const INIT_STATE = {
    cellValue: {
        emptyVal: "",
        player1Val: "X",
        player2Val: "O"
    },
    player1Turn: true,
    boardArrVal: ["", "", "", "", "", "", "", "", ""],
    gameFinished: false,
    winner: null
};

class Game extends Component {
    state = INIT_STATE;

    /* Notice!!!  I need the ID of the cells  */
    /* id 0 - 8 */
    cellClickHanlder = id => {
        const { player1Turn } = this.state;
        //   this.state.boardArrVal[id] = player1Turn === true ? "X" : "O";
        if (this.state.winner) {
            return;
        }
        let preArrVal = this.state.boardArrVal.slice();
        preArrVal[id] = player1Turn === true ? "X" : "O";

        this.setState({
            player1Turn: !player1Turn,
            boardArrVal: preArrVal
        });

        if (this.checkWinner(this.state.boardArrVal)) {
            this.setState({
                winner: this.state.player1Turn === true ? "Player2" : "Player1"
            });
        }
    };

    // h  v
    checkWinner = boardArr => {
        // horizontal
        if (
            (boardArr[0] !== "" &&
                boardArr[0] === boardArr[1] &&
                boardArr[1] === boardArr[2]) ||
            (boardArr[3] !== "" &&
                boardArr[3] === boardArr[4] &&
                boardArr[4] === boardArr[5]) ||
            (boardArr[6] !== "" &&
                boardArr[6] === boardArr[7] &&
                boardArr[7] === boardArr[8])
        ) {
            // row 1 // row 2
            // row 3
            return true;
        }
    };

    startGameClickHandler = () => {
        this.setState(INIT_STATE);
    };

    render() {
        return (
            <div className="Game">
                <Board
                    cells={this.state.boardArrVal}
                    cellClickHandler={this.cellClickHanlder}
                />

                <button onClick={this.startGameClickHandler}>Start</button>
            </div>
        );
    }
}

export default Game;

/* pass array[][]  and  clickEventHandler to it*/
