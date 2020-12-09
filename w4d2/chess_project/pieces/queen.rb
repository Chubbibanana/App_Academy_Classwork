require_relative "piece"
require_relative "slideable"

class Queen < Piece
    include Slideable

    def symbol
        '♛'.colorize(self.color)
    end

    def inspect
        symbol
    end

    private
    def move_dirs 
        lateral_dirs + diagonal_dirs
    end
end