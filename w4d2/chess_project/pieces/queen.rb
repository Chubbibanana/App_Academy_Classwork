class Queen < Piece
    include Slideable

    def symbol
        '♛'.colorize(self.color)
    end
    private
    def move_dirs 
        lateral_dirs + diagonal_dirs
    end
end