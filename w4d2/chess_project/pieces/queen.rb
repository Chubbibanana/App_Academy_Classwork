class Queen < Piece
    include Slideable

    private
    def move_dirs 
        ['lateral', 'diagonal']
    end
end