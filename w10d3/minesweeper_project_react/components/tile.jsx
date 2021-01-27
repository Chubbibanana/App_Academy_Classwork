import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        const tile = this.props.tile;
        let tileString;
        let cssClass;

        if (tile.explored) {
            if (tile.bombed) {
                cssClass = 'bombed';
                tileString = 'b';
            }
            else {
                cssClass = 'explored';
                const adjacents = tile.adjacentBombCount();
                adjacents === 0 ? (tileString = '') : (tileString = `${adjacents}`);
                
                // tile.explore();
            }

        } else if (tile.flagged) {
            cssClass = 'flagged';
            tileString = '\u2691';
        }
        cssClass = `tile ${cssClass}`;
        return (
            <div className={cssClass} onClick={this.handleClick}>
                {tileString}
            </div>
        );
    }

    handleClick(e) {
        let isFlagged = false;
        if (e.altKey) isFlagged = true;
        this.props.updateGame(this.props.tile, isFlagged);
    }
}

export default Tile;