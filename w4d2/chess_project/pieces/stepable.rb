module Stepable 
    def moves
        moves = []
        move_diffs.each do |move|
            x1, y1 = self.position 
            x2, y2 = move
            new_pos = [x1 + x2, y1 + y2]
            moves << new_pos if valid_moves.include?(new_pos)
        end
        moves
    end

    private
    def move_diffs

    end
end