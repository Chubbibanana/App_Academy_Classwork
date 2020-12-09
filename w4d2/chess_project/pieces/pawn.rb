class Pawn < Piece

    def symbol
        '♙'.colorize(self.color)
    end

    def moves
    
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
        x, y = self.position
        step = forward_dir
        if at_start_row?
            #add to x twice, add to x once
            #shovel into valid_moves
            #else only check once
        end
    end


end