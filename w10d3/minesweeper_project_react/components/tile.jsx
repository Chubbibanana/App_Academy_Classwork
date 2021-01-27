import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props);

    }
    
    render() {
        const tile = this.props.tile;
        let tileString = 'u';

        if (tile.bombed) {
            tileString = '\u1F4A3';
        } else if (tile.explored) {
            tileString = 'e';
        } else if (tile.flagged) {
            tileString = '\u2691';
        }
        return (
            <div className='tile'>
                <button>{tileString}</button>
            </div>
        )};
}

export default Tile;