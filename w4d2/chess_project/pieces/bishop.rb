class Bishop < Piece
    include Slideable

    private
    def move_dirs 
        'diagonal'
    end
end