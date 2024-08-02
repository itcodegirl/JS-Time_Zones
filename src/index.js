

//Asia, Tokyo time via moment-timezone

let tokyoTime = moment()
	.tz("Asia/Tokyo")
	.format("dddd, MMMM D, YYYY h:m A");

let tokyoElement = document.querySelector("#tokyo");

tokyoElement.innerHTML = tokyoTime;

//America, New York time via moment-timezone

let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local");
localElement.innerHTML = `Your current time zone is ${localTimezone} and the current time is ${moment().format(
	"h:m A"
)}`;

//Europe, Athens time via moment-timezone

let athensTime = moment().tz("Europe/Athens").format("dddd, MMMM D, YYYY h:m A");

let athensElement = document.querySelector("#athens");

athensElement.innerHTML = `The current date and time in Athens Greece is ${athensTime}`;


