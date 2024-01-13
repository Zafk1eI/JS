function func1({color, width, height}) {
	console.log(color, width, height);
}

func1( {color: 'red', width: 400, height: 500} );

function func2({color = 'black',width, height}) {
	console.log(color, width, height);
}

func2( {width: 400, height: 500} );