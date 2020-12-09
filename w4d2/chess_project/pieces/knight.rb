class Knight < Piece

    MOVES = [
        [-2, -1],
        [-2,  1],
        [-1, -2],
        [-1,  2],
        [ 1, -2],
        [ 1,  2],
        [ 2, -1],
        [ 2,  1]
    ]

    def symbol
        '♘'.colorize(self.color)
    end

    protected
    def move_diffs
        MOVES
    end

end