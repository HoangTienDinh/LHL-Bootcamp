function daySuffix(day) {
  let output = 0;
  if (day.length > 1) {
    output = day[0];
  }
  return output
}

function getOrdinal(day) {
  let ones = day.toString().split('').pop();
  ones = parseInt(ones)
  let tens = parseInt(daySuffix(day), 10);
  let suffix = ''
  if (tens == 0  || tens == 2) {
    switch (ones) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      case 4: case 5: case 6: case 7: case 8: case 9:
        suffix = 'th';
        break;
    }
  }
  if (tens == 1) {
    switch (ones) {
      case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
      suffix = 'th';
    }
  }
  return suffix
}




let talkingCalendar = function(date) {
// regex splitter into lets for year month day
let spl = date.split('/')
let year = spl[0];
let month = parseInt(spl[1], 10);
let day = parseInt(spl[2], 10);
let monthword = ''
switch(month) {
  case 1:
    monthword = 'January';
    break
  case 2:
    monthword = 'February';
    break
  case 3:
    monthword = 'March';
    break
  case 4:
    monthword = 'April';
    break;
  case 5:
    monthword = 'May';
    break;
  case 6:
    monthword = 'June';
    break;
  case 7:
    monthword = 'July';
    break;
  case 8:
    monthword = 'August';
    break;
  case 9:
    monthword = 'September';
    break;
  case 10:
    monthword = 'October';
    break;
  case 11:
    monthword = 'November';
    break;
  case 12:
    monthword = 'December';
}
// case switches for day suffix
let ordinal = getOrdinal(day);
let outputString = monthword+' '+day+ordinal+', '+year;
return outputString
}

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));