require_relative 'p04_linked_list'

class HashMap
  attr_accessor :count
  include Enumerable
  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
  end

  def set(key, val)
    index = bucket(key)
    if @store[index].include?(key)
      @store[index].update(key, val)
    else
      @store[index].append(key, val)
      count += 1
    end
  end

  def get(key)
    index = bucket(key)
    if @store[index].include?(key)
      @store[index].get(key)
    else
      nil
    end
  end

  def delete(key)
    index = bucket(key)
    @store[index].remove(key)
  end

  def []=(key, val)
    index = bucket(key)
    if @store[index].include?(key)
      @store[index].update(key, val)
    else
      @store[index].append(key, val)
      count += 1
    end
  end

  def [](key)
    index = bucket(key)
    if @store[index].include?(key)
      @store[index].get(key)
    else
      nil
    end
  end

  def each(&prc)
    @store.each do |linked_list|
      prc.call(linked_list)
    end
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
    key.hash % num_buckets
  end
end
