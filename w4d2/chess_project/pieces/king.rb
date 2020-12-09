class King < Piece
    include Stepable
    MOVES = [
        [-1,0],
        [1,0],
        [0,1]
        [0,-1]
        [-1, -1]
        [1, 1]
        [-1, 1]
        [1, -1]
    ]
    def symbol
        '♔'.colorize(self.color)
    end
    protected
    def move_diffs
        MOVES
    end


end