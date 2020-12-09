require_relative 'board'
require "colorize"
class Piece 
    def initialize(color, board, position)
        @color = color
        @board = board
        @position = position 
    end

    def to_s
        @color.to_s
    end
    
    def empty?
        false
    end

    def valid_moves
        moves = []
        @board.rows.each_with_index do |row, idx1|
            row.each_with_index do |piece, idx2|
                current = @board[idx1][idx2]
                if current.color != @color && !current.is_a?(King)
                    moves << [idx1, idx2]
                end
            end
        end
        moves
    end

    def pos=(val)
        x, y = val
        pos[0], pos[1] = x, y
    end
        
    def inspect
        @value.inspect
    end

    private 

    def move_into_check?(end_pos)

    end

end

