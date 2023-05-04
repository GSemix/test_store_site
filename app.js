let tg = window.Telegram.WebApp;

tg.expand();

tg.mainButton.textColor = "#FFFFFF";
tg.mainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");



btn1.addEventListener("click", function(){
	if (tg.mainButton.isVisible) {
		tg.mainButton.hide();
	} else {
		tg.mainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.mainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.mainButton.isVisible) {
		tg.mainButton.hide();
	} else {
		tg.mainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.mainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.mainButton.isVisible) {
		tg.mainButton.hide();
	} else {
		tg.mainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.mainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.mainButton.isVisible) {
		tg.mainButton.hide();
	} else {
		tg.mainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.mainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.mainButton.isVisible) {
		tg.mainButton.hide();
	} else {
		tg.mainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.mainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.mainButton.isVisible) {
		tg.mainButton.hide();
	} else {
		tg.mainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.mainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`

usercard.appendChild(p);

async function showButton(){
	document.getElementById('form_test').style.width = "70vw";
	await sleep(350);
	document.getElementById('cancelButton').hidden = false;
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

function cancelButtonPressed() {
	document.getElementById('form_test').style.width = "90vw"
	document.getElementById('cancelButton').hidden = true;
};

function toItemPage() {
	window.location.href = "catalog_item.html";
};

function myFunction() {
	alert(123);
};





