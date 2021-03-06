require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if @board.over?
      return true if @board.winner != evaluator && @board.winner != nil
      return false
    end
    if evaluator == @next_mover_mark
      self.children.all? { |child| child.losing_node?(evaluator) }
    else
      self.children.any? { |child| child.losing_node?(evaluator) }
    end
  end

  def winning_node?(evaluator)
    if @board.over?
      return true if @board.winner == evaluator
      return false
    end
    if evaluator == @next_mover_mark
      self.children.any? { |child| child.winning_node?(evaluator) }
    else  
      self.children.all? { |child| child.winning_node?(evaluator) }
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    moves = []
    @board.rows.each_with_index do |row, idx1|
      row.each_with_index do |ele, idx2|
        pos = [idx1, idx2]
        if @board.empty?(pos)
          test_board = @board.dup
          test_board[pos] = @next_mover_mark
          next_mark = @next_mover_mark == :x ? :o : :x
          moves << TicTacToeNode.new(test_board, next_mark, pos)
        end
      end
    end
    moves
  end
end
