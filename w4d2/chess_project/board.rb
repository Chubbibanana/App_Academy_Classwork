require 'byebug'
require_relative "pieces"


class Board
    attr_reader :rows
    def initialize
        @rows = populate
    end

    def populate 
        non_pawn_1 = [Piece.new("rook"), Piece.new("knight"), Piece.new("bishop"), Piece.new("queen"),
                    Piece.new("king"), Piece.new("bishop"), Piece.new("knight"), Piece.new("rook")]
        non_pawn_2 = [Piece.new("rook"), Piece.new("knight"), Piece.new("bishop"), Piece.new("queen"),
                    Piece.new("king"), Piece.new("bishop"), Piece.new("knight"), Piece.new("rook")]            
        pawn_1 = [Piece.new("pawn"), Piece.new("pawn"), Piece.new("pawn"), Piece.new("pawn"),
                Piece.new("pawn"), Piece.new("pawn"), Piece.new("pawn"), Piece.new("pawn")]
        pawn_2 = [Piece.new("pawn"), Piece.new("pawn"), Piece.new("pawn"), Piece.new("pawn"),
        Piece.new("pawn"), Piece.new("pawn"), Piece.new("pawn"), Piece.new("pawn")]
        # pieces will be classes
        board = Array.new(8) {Array.new(8)}
        board[0], board[7] = non_pawn_1, non_pawn_2
        board[1], board[6] = pawn_1, pawn_2
        board 
    end

    def move_piece(start_pos, end_pos)
        y1, x1 = start_pos[0], start_pos[1]
        y2, x2 = end_pos[0], end_pos[1]

        raise "no piece at start position" if @rows[y1][x1] == nil
        raise "invalid move" if  x2 > 7 || x2 < 0 || 
                                y2 > 7 || y2 < 0 || @rows[y2][x2] != nil

        # start-pos => variable
        # delete piece from start pos
        # set end_pos to variable

        current_piece = @rows[y1][x1]
        @rows[y1][x1] = nil
        @rows[y2][x2] = current_piece
    end


end



# board = Board.new
# board.move_piece([0,0], [10,12])
# p board.rows