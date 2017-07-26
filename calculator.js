var calculator = {};

function multipleTest1() {
	//TEST
	var result = calculator.multiply(3 , 3);

	// Assert Result is expected
	if (result === 9) {
		console.log('Test Passed');
	} else {
		console.log('Test Failed');
	}
};

multipleTest1();