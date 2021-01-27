import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component{
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 9);
        this.state = {
            board: board
        };
        this.updateGame = this.updateGame.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, isFlagged) {
        if (isFlagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board });
    }

    restartGame() {
        const board = new Minesweeper.Board(9, 9);
        this.setState({
            board: board
        });
    }

    render() {
        let modal = this.renderModal();
        return (
            <div>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }

    renderModal() {
        let message;
        if (this.state.board.lost()) {
            message = 'you have lost';
        } else if (this.state.board.won()) {
            message = 'you have won';
        }
        if (message) {
            return (
                <div className='modal-screen'>
                    <div className='modal-content'>
                        <p>{message}</p>
                        <button onClick={this.restartGame}>Play Again!!!</button>
                    </div>
                </div>
            );
        }
    }

    
}

export default Game;