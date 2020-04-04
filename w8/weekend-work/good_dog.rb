# Helps to make modular code (Like writing helper functions), its reusable code.
# module Speak
#   def speak(sound)
#     puts "#{sound}"
#   end
# end

# See, resusable.
# class GoodDog
#   include Speak
# end

# class HumanBeing
#   include Speak
# end

# sparky = GoodDog.new
# sparky.speak("Arf!")

# bob = HumanBeing.new
# bob.speak("Hello!")

# Shows the ancestors (all the things that helped make the function run)
# puts "---GoodDog ancestors---"
# puts GoodDog.ancestors
# puts ""
# puts "HumanBeing ancestors"
# puts HumanBeing.ancestors


# class GoodDog
#   def initialize
#     puts "This object was initialized!"
#   end
# end

# sparky = GoodDog.new # => "This object was initialized!"

# @ is an instance variable
# Starting out here we can write code like this
# class GoodDog
#   def initialize(name)
#     @name = name
#   end

#   def get_name
#     @name
#   end

#   def set_name=(name)
#     @name = name
#   end

#   def speak
#     "#{@name} says arf!"
#   end
# end

# sparky = GoodDog.new("Sparky")
# puts sparky.speak
# puts sparky.get_name
# sparky.set_name = "Spartacus"
# puts sparky.get_name

# It can turn into this because ruby inherantly knows the getter and setter methods to apply
# class GoodDog
#   def initialize(name)
#     @name = name
#   end

#   def name
#     @name
#   end

#   def name=(n)
#     @name = n
#   end

#   def speak
#     "#{@name} says Arf!"
#   end
# end

# sparky = GoodDog.new("Sparky")
# puts sparky.speak
# puts sparky.name
# sparky.name = "Spartacus"
# puts sparky.name

# fido = GoodDog.new("Fido")
# puts fido.speak + " GET OUT OF HERE"

# Going into this where attr_accessor takes a symbol as an argument.
# attr_accesor gives both a getter and setter method
# attr_reader allows for only getter method
# attr_writer allows for only setter method
# They all take symbols in
# class GoodDog
#   attr_accessor :name
  
#   def initialize(name)
#     @name = name
#   end

#   def speak
#     "#{@name} says arf!" # We could also write it without the "@" and reference it directly as a getter method (good practice) instead of an instance variable
#   end
# end

# sparky = GoodDog.new("Sparky")
# puts sparky.speak
# puts sparky.name
# sparky.name = "Spartacus"
# puts sparky.name
# For multiple states you want to track with the attr_accessor
# attr_accessor :name, :height, :weight

# class GoodDog
#   attr_accessor :name, :height, :weight
  
#   def initialize(n, h, w)
#     @name = n
#     @weight = w
#     @height = h
#   end

#   def speak
#     "#{name} says arf!"
#   end

#   def change_info(n, h, w)
#     @name = n  # if we remove the "@" on these instance', they become initialized as local variables (Ruby thinks we are initializing them name = n like x = 1)
#     @height = h 
#     @weight = w
#   end

#   def info 
#     "#{name} weighs #{weight} and is #{height} tall."
#   end
# end

# sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
# puts sparky.info # => Sparky weighs 10 lbs and is 12 inches tall.

# sparky.change_info('Spartacus', '24 inches', '45 lbs')
# puts sparky.info

class GoodDog
  attr_accessor :name, :height, :weight
  
  def initialize(n, h, w)
    @name = n
    @weight = w
    @height = h
  end

  def speak
    "#{name} says arf!"
  end

  def change_info(n, h, w)
    self.name = n
    self.height = h 
    self.weight = w
  end

  def info 
    "#{name} weighs #{weight} and is #{height} tall." # We could also right the getters as self.name for consistency (but its not required)
  end
end

sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
puts sparky.info # => Sparky weighs 10 lbs and is 12 inches tall.

sparky.change_info('Spartacus', '24 inches', '45 lbs')
puts sparky.info