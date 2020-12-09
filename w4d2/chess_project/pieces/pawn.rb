require_relative "piece"


class Pawn < Piece

    def symbol
        '♙'.colorize(self.color)
    end

    def moves
        forward_steps + side_attacks
    end

    def inspect
        symbol
    end

    private 

    def at_start_row?
        if self.to_s == "white"
            return true if self.position[0] == 6
        else
            return true if self.position[0] == 1
        end
        false
    end

    def forward_dir
        return -1 if self.to_s == "white" 
        1
    end

    def forward_steps
        moves = []
        x1, y1 = self.position
        step = forward_dir
        step1 = [x1 + forward_dir, y1]
        step2 = [x1 + (forward_dir * 2), y1]
        if at_start_row?
            if valid_moves.include?(step1)
                moves << step1
                moves << step2 if valid_moves.include?(step2)
            end
        else
            moves << step1 if valid_moves.include?(step1)
        end
        moves
    end

    def side_attacks
        x1, y1, y2 = forward_dir, -1, 1
        x, y = self.position 
        moves = []
        step1 = [x1 + x, y1 + y]
        step2 = [x1 + x, y2 + y]
        moves << step1 if valid_moves.include?(step1)
        moves << step2 if valid_moves.include?(step2)
        moves
    end


end