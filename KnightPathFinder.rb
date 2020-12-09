require_relative "PolyTreeNode.rb"
require "byebug"
class KnightPathFinder
    def initialize(starting_pos)
        @root_node = PolyTreeNode.new(starting_pos)
        @considered_positions = [starting_pos]
    end

    def self.valid_moves(pos)
        x, y = pos[0], pos[1]

        range = (0..7).to_a
        possible = []
        possible << [x + 1, y + 2]
        possible << [x + 1, y - 2]
        possible << [x + 2, y + 1]
        possible << [x + 2, y - 1]
        # debugger        
        possible << [x - 1, y + 2]
        possible << [x - 1, y - 2]
        possible << [x - 2, y + 1]
        possible << [x - 2, y - 1]
        possible.select! do |pos|
            x, y = pos[0], pos[1]
            pos if range.include?(x) && range.include?(y)
        end

        possible
    end
    
    def new_move_positions(pos)
        new_pos = []
        KnightPathFinder.valid_moves(pos).each do |arr|
            if !@considered_positions.include?(arr)
                @considered_positions << arr
                new_pos << arr 
            end
        end
        new_pos
    end

    def build_move_tree(position)

        nodes =[]
        nodes << @root_node
        path = []
        until nodes.empty? 
            node = nodes.shift
            path << node 
            # debugger
            return node if node.value == position
            new_move_positions(node.value).each do |pos|
                move = PolyTreeNode.new(pos)
                nodes << move
                node.add_child(move)
            end
            nodes.concat(node.children)

        end

    end

    
end 

kpf = KnightPathFinder.new([0,0])
p kpf.build_move_tree([2,1])
