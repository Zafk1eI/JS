let arr = [1, 2, 3, 4, 5];

function func(arr, index) {
	if (index < arr.length) {
		console.log(arr[index]);
		func(arr, index + 1);
	}
}

func(arr, 0);