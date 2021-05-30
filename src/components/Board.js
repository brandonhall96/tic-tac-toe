import React, { Component } from 'react'

class Board extends Component {
    renderSquare(i) {

        return (
            <div>
                <Square value={i} />
                
            </div>
        )
    }
}

export default Board;
