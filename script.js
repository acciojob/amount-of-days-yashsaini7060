function  daysOfAYear(year){
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        // The year is a leap year, so it has 366 days
		alert(366);
	} else {
        // The year is not a leap year, so it has 365 days
        alert(365)
    }

}
var year = prompt()
daysOfAYear(year)
