import React from 'react';
import Tile from './tile';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
    }

    render() {
        const board = this.props.board;

        return (
            <div id='board'>
                
                {this.renderRow(board)}
            </div>
        );
    }

    renderRow(board) {
        
        return board.grid.map( (row, idx) => {
            return (
                <div className='row' key={idx}>
                    {this.renderTiles(row, idx)}
                </div>
            );
        })
    }

    renderTiles(row, idx) {
        return row.map( (tile, idx2) => {
            return (
                <Tile 
                    tile={tile}
                    updateGame={this.props.updateGame}
                    key={(idx + 1) * (idx2 + 1) + idx2}
                />
            );
        });
    }

}

export default Board;