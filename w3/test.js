const data = ["apple", "banana", "dragon fruit", "pineapple", "peach", "orange", "pear"]


function countEvenToTwelve(number) {
  if (number <= 6) {
    console.log(data[number])
    countEvenToTwelve(number + 2);

  }
}


countEvenToTwelve(2)