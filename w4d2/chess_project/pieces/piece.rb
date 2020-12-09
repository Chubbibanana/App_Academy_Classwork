require "colorize"
class Piece 
    attr_reader :position, :color
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
        valid_moves = []
        @board.rows.each_with_index do |row, idx1|
            row.each_with_index do |piece, idx2|
                current = @board.rows[idx1][idx2]
                if current.color.nil? || (current.color != @color && !current.is_a?(King))
                    valid_moves << [idx1, idx2]
                end
            end
        end
        valid_moves
    end

    def position=(val)
        x, y = val
        @position[0], @position[1] = x, y
    end

    def symbol
        self.symbol
    end

    def inspect
        symbol
    end

    private 

    def move_into_check?(end_pos)

    end

end

