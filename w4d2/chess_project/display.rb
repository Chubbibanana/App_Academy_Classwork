require 'colorize'
require_relative 'board'
require_relative 'cursor'


class Display
    attr_reader :board, :cursor
    def initialize(board)
        @cursor = Cursor.new([0, 0], board)
        @board = board
    end

    def render
        @board.rows.each {|row| p row}
        p "cursor position: #{@cursor.cursor_pos}"
    end

    def run 
        render
        until @cursor.get_input
            render
        end
    end
end

board = Board.new
display = Display.new(board)
display.run