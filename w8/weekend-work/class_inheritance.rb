# class Animal
#   def speak
#     "Hello!"
#   end
# end

# class GoodDog < Animal
#   attr_accessor :name

#   def initialize(n)
#     self.name = n
#   end

#   def speak
#     "#{self.name} says arf!"
#   end

# end

# class Cat < Animal
# end

# sparky = GoodDog.new("Sparky")
# paws = Cat.new

# puts sparky.speak
# puts paws.speak
# the .speak method traverses through the class it's called in first before going up to the superclass to find the method.  If the method is found within the class, then it won't go to the superclass, if it isn't found go up to the superclass.

# class Animal 
#   def speak 
#     "Hello!" 
#   end 
# end 

# class GoodDog < Animal 
#   def speak 
#     super + " from GoodDog class"  # If super is called within the subclass, it will go up to the superclass and invoke that method within the superclass which is animal.
#   end 
# end 

# sparky = GoodDog.new 
# puts sparky.speak

# class Animal
#   attr_accessor :name

#   def initialize(name)
#     @name = name
#   end
# end

# class GoodDog < Animal
#   def initialize(color)
#     super
#     @color = color
#   end
# end

# class BadDog < Animal
#   def initialize(age, name)
#     super(name)
#     @age = age
#   end
# end

# test = BadDog.new(2, "bear")
# p test

# bruno = GoodDog.new("brown")
# p bruno

# module Walkable
#   def walk
#     "I'm walking."
#   end
# end

# module Swimmable
#   def swim
#     "I'm swimming."
#   end
# end

# module Climbable
#   def climb
#     "I'm climbing."
#   end
# end

# class Animal
#   include Walkable

#   def speak
#     "I'm an animal, and I speak!"
#   end
# end

# class GoodDog < Animal
#   include Swimmable
#   include Climbable
# end

# puts GoodDog.ancestors

# puts "---Animal method lookup---"
# puts Animal.ancestors
# fido = Animal.new
# puts "#{fido.speak} hello test #{fido.walk}"

# module Mammal
#   class Dog 
#     def speak(sound)
#       p "#{sound}"
#     end
#   end

#   class Cat
#     def say_name(name)
#       p "#{name}"
#     end
#   end

#   def self.some_out_of_place_method(num)  # To call a method directly from outside the module, using self. attached to something, in this case self.some_out_of_place_method
#     num ** 2
#   end
# end

# buddy = Mammal::Dog.new
# kitty = Mammal::Cat.new
# buddy.speak("Arf!")
# kitty.say_name("kitty")

# # Calling methods within a module.  
# value = Mammal.some_out_of_place_method(4)
# value = Mammal::some_out_of_place_method(9)

# puts value

# class GoodDog
#   DOG_YEARS = 7

#   attr_accessor :name, :age

#   def initialize(n, a)
#     self.name = n
#     self.age = a
#   end

#   private

#   def human_years
#     age * DOG_YEARS
#   end
# end
# # from inside the class, protected methods are accessible just like public methods.
# # from outside the class, protected methods act just like private methods.
# sparky = GoodDog.new("Sparky", 4)
# puts sparky.human_years
