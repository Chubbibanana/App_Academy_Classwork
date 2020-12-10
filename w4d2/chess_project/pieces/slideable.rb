require 'byebug'
module Slideable

    private 
    LATERAL_DIRS = [
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ]  
    DIAGONAL_DIRS = [
        [-1, -1],
        [1, 1],
        [-1, 1],
        [1, -1]
    ]

    public 

    def lateral_dirs 
        LATERAL_DIRS
    end

    def diagonal_dirs 
        DIAGONAL_DIRS
    end

    def moves
        moves = []
        move_dirs.each do |partial_dir|
            x, y = partial_dir 
            moves.concat(grow_unblocked_moves_in_dir(x, y))
        end
        # debugger
        moves
    end

    private

    def move_dirs
    end

    def grow_unblocked_moves_in_dir(dx, dy)
        x, y = self.position
        new_pos = [x + dx, y + dy]
        debugger
        moves = []
        while valid_moves.include?(new_pos)
            moves << new_pos
            # new_pos[0] += dx
            # new_pos[1] += dy
            x1, y1 = new_pos
            col = board.rows[x1][y1].color
            break if col != nil && col != self.color 
            new_pos =[x1 + dx, y1 + dy]
            
        end
        moves
    end

end

