require 'byebug'
require_relative "pieces/pieces"


class Board
    attr_reader :rows
    def initialize
        @rows = populate
    end

    def [](pos)
        x, y = pos
        @rows[x][y]
    end

    def []=(pos, value)
        x, y = pos
        @rows[x][y] = value
    end

    def populate 
        non_pawn_1 = [Rook.new(:black, self, [0, 0]), Knight.new(:black, self, [0, 1]), 
                    Bishop.new(:black, self, [0, 2]), Queen.new(:black, self, [0, 3]),
                    King.new(:black, self, [0, 4]), Bishop.new(:black, self, [0, 5]), 
                    Knight.new(:black, self, [0, 6]), Rook.new(:black, self, [0, 7])]      
        non_pawn_2 = [Rook.new(:white, self, [7, 0]), Knight.new(:white, self, [7, 1]), 
                    Bishop.new(:white, self, [7, 2]), Queen.new(:white, self, [7, 3]),
                    King.new(:white, self, [7, 4]), Bishop.new(:white, self, [7, 5]), 
                    Knight.new(:white, self, [7, 6]), Rook.new(:white, self, [7, 7])]
        pawn_1 = [Pawn.new(:black, self,[1, 0]), Pawn.new(:black, self,[1, 1]), Pawn.new(:black, self,[1, 2]),
                Pawn.new(:black, self,[1, 3]), Pawn.new(:black, self,[1, 4]), Pawn.new(:black, self,[1, 5]),
                Pawn.new(:black, self,[1, 6]), Pawn.new(:black, self,[1, 7])]
        pawn_2 = [Pawn.new(:white, self,[6, 0]), Pawn.new(:white, self,[6, 6]), Pawn.new(:white, self,[6, 2]),
                Pawn.new(:white, self,[6, 3]), Pawn.new(:white, self,[6, 4]), Pawn.new(:white, self,[6, 5]),
                Pawn.new(:white, self,[6, 6]), Pawn.new(:white, self,[6, 7])]
        # pieces will be classes
        # def initialize(color, board, position) :white :black
        # @color = color
        # @board = board
        # @position = position 
        board = Array.new(8) {Array.new(8) {NullPiece.instance}}
        board[0], board[7] = non_pawn_1, non_pawn_2
        board[1], board[6] = pawn_1, pawn_2
        board
    end


    def move_piece(color, start_pos, end_pos)
        y1, x1 = start_pos[0], start_pos[1]
        y2, x2 = end_pos[0], end_pos[1]
        current_piece = @rows[y1][x1]

        raise "no piece at start position" if @rows[y1][x1] == nil
        moves = current_piece.moves
        raise "not your piece" if color != current_piece.to_s
        # valid_moves = Piece.valid_moves
        # moves.each do |move|
        #     raise 'invalid move' if !valid_moves.include?(move)
        # end
        raise "invalid move" unless moves.include?(end_pos)

        @rows[y1][x1] = NullPiece.instance
        current_piece.position = end_pos
        @rows[y2][x2] = current_piece
    end

    def valid_pos?(pos)
        x, y = pos
        return false if x < 0 || x > 7 || y < 0 || y > 7
        true
    end



end



# board = Board.new
# board.move_piece([0,0], [10,12])
# p board.rows
#      0     1    2    3   4     5    6    7
# 0     
# 1    p     p    p    p    p     p    p   p 
# 2   [nil, nil, nil, nil, nil, nil, nil, nil],
# 3   [nil, nil, nil, nil, nil, nil, nil, nil],
# 4   [nil, nil, nil, nil, nil, nil, nil, nil],
# 5   [nil, nil, nil, nil, nil, nil, nil, nil],
# 6    p     p    p    p    p     p    p   p 
# 7