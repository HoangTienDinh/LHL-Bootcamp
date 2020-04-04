# class GoodDog
#   @@number_of_dogs = 0 # "@@" is a class variable, where "@" is an instance variable

#   def initialize # Constructor (initialize method) this gets called everytime we instantiate a new object via the 'new' method
#     @@number_of_dogs += 1
#   end

#   def self.total_number_of_dogs
#     @@number_of_dogs
#   end
# end

# puts GoodDog.total_number_of_dogs # => 0

# dog1 = GoodDog.new
# dog2 = GoodDog.new

# puts GoodDog.total_number_of_dogs # => 2

# Define a constant by useing an upper case letter at the beginning of the variable name.  By convention ob Ruby programmers, constant variables tend to be all UPPERCASE
# class GoodDog
#   DOG_YEARS = 7 # A constant variable
  
#   attr_accessor :name, :age

#   def initialize(n, a)
#     self.name = n
#     self.age = a * DOG_YEARS
#   end
# end

# sparky = GoodDog.new("Sparky", 4)
# puts sparky.age
# puts sparky.name


# Playing with to_s, by ruby convention puts implicitly used to_s. p is similar to puts (p inspects, good for degugging), but doesn't call to_s on its arguments.
# class GoodDog
#   DOG_YEARS = 7

#   attr_accessor :name, :age

#   def initialize(n, a)
#     @name = n
#     @age = a * DOG_YEARS
#   end

#   def to_s
#     "This dog's name is #{name} and it is #{age} in dog years."
#   end
# end
# sparky = GoodDog.new("Sparky", 4)
# puts sparky # => This dog's name is Sparky and is 28 in dog years.
# p sparky # => #<GoodDog:0x007fe54229b358 @name="Sparky", @age=28>

# puts sparky.inspect is the same as p sparky

class GoodDog
  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    self.name   = n
    self.height = h
    self.weight = w
  end

  def change_info(n, h, w)
    self.name   = n
    self.height = h
    self.weight = w
  end

  def info
    "#{self.name} weighs #{self.weight} and is #{self.height} tall." 
  end

  def what_is_self # An instance method.
    self
  end
  
  puts self # using self inside a class but outside an instance method refers to the class itself.
end

sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
p sparky.what_is_self
# => #<GoodDog:0x007f83ac062b38 @name="Sparky", @height="12 inches", @weight="10 lbs">

# When 'self' is prepended to a method definition, it is defining a class method.
