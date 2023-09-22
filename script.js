//your JS code here. If required.
let count = 0;
let levelElement = document.getElementById("level");

while(true){
	if(levelElement.tagName === "HTML"){
		break;
	}
	levelElement = levelElement.parentNode;
	count++;
}
alert(`The level of the element is: ${count}`);



