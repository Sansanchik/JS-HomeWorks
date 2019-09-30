let userNumber = +prompt("Введите число");
let parsedNumber = parseInt(userNumber);

while(isNaN(parsedNumber)){
    console.log(userNumber);
    userNumber = prompt("Число не верное!");
    parsedNumber = parseInt(userNumber);
}

for (var i = 1; i<=userNumber; i++) {
	if (i % 5 === 0) {
		document.write(i + ", ");
	}
	else if (userNumber < 5) {
		document.write("Число " + userNumber + " не делится на 5");
		break;
	}
}
