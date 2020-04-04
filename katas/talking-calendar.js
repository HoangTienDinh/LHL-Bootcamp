let talkingCalendar = function(date) {
  let newDate = date.split("/");
  let year = newDate[0];
  let month = newDate[1];
  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"];
  let dat = newDate[2];
  let suffix = "";
  let englishFormat = "";

  for (let x = 0; x < newDate.length; x++) {
    if (newDate[1] >= 11 && newDate[1] <= 13) {
      suffix = "th";
    } else ()
  }
  return englishFormat;
};

console.log(talkingCalendar("2017/12/02"));

var lastDigit = getLastDigitOfDay

if (last digit between 11 and 13 inclusive){
   return "th"
}

if(last digit is 1){
   return "st";
} else (if last digit is 2){
   return "nd";
} else (if last digit is 3){
   return "rd";
} else return "th";

var talkingCalendar = function(date) {
  var arrayMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"];
  var result = new Date(date);
  var year = result.getFullYear(result); // Taking the Year
  var month = arrayMonths[(result.getMonth(date))]; // Taking the Month
  var day = result.getDate(); // taking the Day
  var console;
  if (day % 10 === 1 && (day/10 === 1 || 2 || 3)) {
  	switch (day){
  		case 11:
  		 console = month + " " + day + "th, " + year;
  		break;
  		case 0:
  		 console = month + "31st, " + year;
  		break;
  		default:
  		 console = month + " " + day + "st, " + year;
	}
  } else if(day % 10 === 2 && (day/10 === 1 || 2 || 3)){
  	  switch (day){
  		case 12:
  		 console = month + " " + day + "th, " + year;
  		break;
  		default:
  		 console = month + " " + day + "nd, " + year;
	  }
  } else if(day % 10 === 3 && (day/10 === 1 || 2 || 3)){
  	  switch (day){
  		case 13:
  		 console = month + " " + day + "th, " + year;
  		break;
  		default:
  		 console = month + " " + day + "rd, " + year;
	  }
  } else {
  	 console = month + " " + day + "th, " + year; 
    }
  return console;
};
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
/*
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/