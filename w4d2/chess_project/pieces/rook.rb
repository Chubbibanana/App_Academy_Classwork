class Rook < Piece 
    include Slideable

    private
    def move_dirs 
        'lateral'
    end
end