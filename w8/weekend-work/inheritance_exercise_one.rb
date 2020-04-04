# class Vehicle
#   attr_accessor :wheels

#   def initialize(w)
#     self.wheels = w 
#   end

# end

# class MyCar < Vehicle
#   attr_accessor :model, :name

#   def initialize(m, n)
#     self.model = m
#     self.name = n 
#   end
# end

# class MyTruck < Vehicle
# end

# volvo = MyCar.new("VW", "Golf")
# p volvo
# # puts MyCar.ancestors
# test = MyTruck.new("4")
# p test

class Vehicle
  @@number_of_vehicles = 0

  def self.number_of_vehicles
    puts "This program has created #{@@number_of_vehicles} vehicles"
  end

  def initialize
    @@number_of_vehicles += 1
  end

  def self.gas_mileage(gallons, miles)
    puts "#{miles / gallons} miles per gallon of gas"
  end
end

class MyCar < Vehicle
  NUMBER_OF_DOORS = 4

  attr_accessor :color
  attr_reader :year, :model

  def initialize(y, c, m)
    @year = y
    @color = c
    @model = m
    @current_speed = 0
  end

  def speed_up(number)
    @current_speed += number
    puts "You push the gas and accelerate #{number}km/h."
  end

  def brake(number)
    @current_speed -= number
    puts "you press the break and decelerate #{number}km/h."
  end

  def current_speed
    puts "You are now going #{@current_speed}km/h."
  end
  
  def shut_down
    @current_speed = 0
    puts "Let's park this bad boy!"
  end

  def spray_paint(c)
    self.color = c 
    puts "Your new #{color} paint job looks great!"
  end

  def info
    "This #{color} #{model}, is from the year #{year}"
  end

  def self.gas_mileage(gallons, miles)
    puts "#{miles / gallons} miles per gallon of gas"
  end

  def to_s
    "My car is a #{color}, #{year}, #{@model}!"
  end
end

class MyTruck < Vehicle
  NUMBER_OF_DOORS = 2
end

# Vehicle.gas_mileage(20, 219)

newCar = MyCar.new('2008', 'blue', 'Honda Civic')
puts newCar

# testTruck = MyTruck.new
# puts testTruck