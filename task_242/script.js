let func = function(x, y) {
return x + y;
};

test(function() { return func(2,3)});

function test(func) {
	console.log(func());
}