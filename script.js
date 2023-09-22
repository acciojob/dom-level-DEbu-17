//your JS code here. If required.
let count = 1;
let levelElement = document.getElementById("level");

while(true){
	if(levelElement.tagName === "HTML"){
		break;
	}
	levelElement = levelElement.parentNode;
	count++;
}
alert(`The level of the element is: ${count}`);



