let tokyoTime = moment()
	.tz("Asia/Tokyo")
	.format("dddd, MMMM D, YYYY h:m A");

let tokyoElement = document.querySelector("#tokyo");

tokyoElement.innerHTML = tokyoTime;

let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local");
localElement.innerHTML = `Your current time zone is ${localTimezone} and the current time is ${moment().format(
	"h:m A"
)}`;