require_relative "piece"
require_relative "slideable"


class Rook < Piece 
    include Slideable

    def symbol
        '♜'.colorize(self.color)
    end

    def inspect
        symbol
    end

    private
    def move_dirs 
        lateral_dirs
    end
end