function getday() {
	return (new Date).getDate();
}

function getyear() {
	if (arr[0] == undefined) {
		return (new Date).getFullYear();
	}
	
}

function getmonth() {
	if (arr[1] == undefined) {
		return (new Date).getMonth() + 1;
	}
}

let arr = [];

let [year = getyear(), month = getmonth(), day = getday()] = arr;

console.log(year, month, day);
