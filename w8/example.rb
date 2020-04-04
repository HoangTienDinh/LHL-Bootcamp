# puts "Hello, what's your name?"
# name = $stdin.gets.chomp
# puts "Welcome to \"Ruby land\", #{name}. Hope you enjoy your stay (and never leave!)"

# first, second, third = ARGV

# puts "Your first variable is: #{first}"
# puts "Your second variable is: #{second}"
# puts "Your third variable is: #{third}"

# def print_two(*args)
#   arg1, arg2 = args
#   puts "arg1: #{arg1}, arg2: #{arg2}"
# end

# def print_two_again(arg1, arg2)
#   puts "arg1: #{arg1}, arg2: #{arg2}"
# end

# def print_one(arg1)
#   puts "arg1: #{arg1}"
# end

# def print_none()
#   puts "I got nothin'."
# end

# print_two("Zed", "Shaw")
# print_two_again("Zed", "Shaw")
# print_one("First!")
# print_none()

# def add(a, b)
#   puts "ADDING #{a} + #{b}"
#   return a + b
# end

# def subtract(a, b)
#   puts "SUBTRACTING #{a} - #{b}"
#   return a - b
# end

# def multiply(a, b)
#   puts "MULTIPLYING #{a} * #{b}"
#   return a * b
# end

# def divide(a, b)
#   puts "DIVIDING #{a} / #{b}"
#   return a / b
# end

# puts "Let's do some math with just functions!"

# age = add(30, 5)
# height = subtract(78, 4)
# weight = multiply(90, 2)
# iq = divide(100, 2)

# puts "Age: #{age}, Height: #{height}, Weight: #{weight}, IQ: #{iq}"

# puts "Here is a puzzle."

# what = add(age, subtract(height, multiply(weight, divide(iq, 2))))

# puts "That becomes: #{what}. Can you do it by hand?"

the_count = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

# fruits.each do |fruit|
#   puts "A fruit of type: #{fruit}"
# end

# change.each {|i| puts "I got #{i}" }

elements = []

(0..8).each do |i|
  puts "adding #{i} to the list."
  elements.push(i)
end

elements.each {|i| puts "Element was: #{i}"}